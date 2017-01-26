<template lang='pug'>
f7-page(name='story', navbar-through)
  f7-navbar(back-link="Back", :title='story.title')
  .story-header
    .story-title {{story.title}}
    .story-info {{story.score}} points by {{story.by}}
    .story-link 
      f7-link(:href='story.url', external) {{story.url}}
  .story-comments
    .messages
      .message.message-received.message-with-tail.message-last(v-for='comment in storyComments')
        .message-name
          span.comment-name {{comment.by}}
        .message-text {{comment.text}}
</template>

<script>
export default {
  data () {
    return {
      story: this.$root.story,
      storyComments: []
    }
  },
  methods: {
    fetchComments () {
      var self = this
      var comments = []
      var commentsCount = 0
      if (self.story.kids) {
        self.story.kids.forEach((child, index) => {
          this.$$.ajax({
            url: 'https://hacker-news.firebaseio.com/v0/item/' + child + '.json',
            success (data) {
              var comment = JSON.parse(data)
              if (comment) {
                if (comment.text && comment.text.length && !comment.deleted) {
                  comments[index] = comment
                }
              }
              commentsCount += 1
              if (commentsCount === self.story.kids.length) {
                comments = comments.filter(function (n) {
                  return n !== undefined
                })
                self.storyComments = comments
              }
            },
            error () {
              // commentsCount += 1
            }
          })
        })
      }
    }
  },
  created () {
    this.fetchComments()
  }
}
</script>

<style>
.story-header {
  height: 130px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 10;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 20px 15px;
  background: #fff;
}
.story-title {
  font-size: 17px;
  font-weight: 500;
  line-height: 22px;
  max-height: 44px;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  position: relative;
  overflow: hidden;
  margin-bottom: 5px;
}
.story-info {
  color: #8e8e93;
}
.story-comments {
  position: relative;
  height: -moz-calc(100% - 130px);
  height: -ms-calc(100% - 130px);
  height: -webkit-calc(100% - 130px);
  height: calc(100% - 130px);
  overflow: auto;
  box-sizing: border-box;
  -webkit-overflow-scrolling: touch;
}
.story-comments .messages {
  padding-bottom: 20px;
}
.story-comments .messages > .preloader {
  position: absolute;
  width: 32px;
  height: 32px;
  left: 50%;
  margin-left: -16px;
  top: 20px;
}
.story-comments .preloader-label {
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  text-align: center;
}
.story-comments .message {
  max-width: 98%;
}
.story-comments .message-name .comment-name {
  font-weight: 500;
  color: #333;
}
.story-comments .message-text {
  font-size: 14px;
  background: #fff;
  color: #000;
  line-height: 1.3;
}
.story-comments .message-sent .message-text {
  font-size: 14px;
  background: #ff6600;
  color: #fff;
  line-height: 1.3;
}
.story-comments .message-sent .message-text a {
  color: #555;
}
.story-comments .message-kids {
  margin: 0 20px 0 15px;
}
.story-comments .message-kids > a,
.story-comments .message-kids > .preloader {
  margin-left: 12px;
  position: relative;
  top: -2px;
  display: inline-block;
}
.story-comments .message-kids > a {
  font-size: 12px;
  margin-bottom: 10px;
  height: 16px;
}
.story-comments .message-kids > .preloader {
  width: 16px;
  height: 16px;
  margin-bottom: 7px;
}
.story-comments .message-kids > a i {
  border: 1px solid #ff6600;
  width: 15px;
  height: 12px;
  display: inline-block;
  position: relative;
  border-radius: 10px;
  vertical-align: top;
}
.story-comments .message-kids > a i:before {
  content: '';
  width: 0;
  height: 0;
  position: absolute;
  left: 50%;
  margin-left: -5px;
  bottom: -3px;
  border-left: 0px solid transparent;
  border-right: 5px solid transparent;
  border-top: 3px solid #ff6600;
}
.message-kids {
  text-align: right;
}
.message-kids .message {
  text-align: left;
}
.story-comments .message pre {
  white-space: normal;
}
</style>
