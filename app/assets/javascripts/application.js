// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
// require turbolinks
//= require jquery3
//= require popper
//= require bootstrap-sprockets
//= require_tree .

$(function() {
  
  $(document).on('keydown', function(event) {
    // console.log(event.keyCode)
    if(event.keyCode === 13) {
      $('[data-hover]').addClass('is-hover')
      $('[data-toggler-run]').click()
      $('[data-trigger]').click()
    }
  })
  
  $('[data-toggler-run]').on('click', function(event) {
    event.preventDefault()

    const $el = $(event.currentTarget).closest('li').find('.car, .animal')
    const className = $(event.currentTarget).attr('data-toggler-run')
    $el.toggleClass(className)
  })

  $('[data-hover]').each(function(index, element){
    removeSelectorTransitoin($(element), 'is-hover')
  })

  $('[data-trigger]').on('click', function(event) {
    event.preventDefault()
    
    const $target = $(event.currentTarget).closest('.card').find('[data-trigger-target]')
    $target.each(function(index, element){
      const $el = $(element)
      const className = 'is-action'

      $el.removeClass(className)
      setTimeout(() => {
        $el.addClass(className)
      }, 30)

      removeSelectorAnimation($el, className)
    })
  })

  function removeSelectorAnimation($el, className) {
    if($el.attr('has-listner') !== 'true') {
      $el.attr('has-listner', 'true')
      $el.on('webkitAnimationEnd', () => {
        $el.removeClass(className)
      })
    }
  }

  function removeSelectorTransitoin($el, className) {
    if($el.attr('has-listner') !== 'true') {
      $el.attr('has-listner', 'true')
      $el.on('webkitTransitionEnd', () => {
        $el.removeClass(className)
      })
    }
  }

  function initCurrent() {
    const links = document.querySelectorAll('[data-current] a')
    for (let index = 0; index < links.length; index++) {
      const element = links[index]
      if (element.getAttribute('href') === location.pathname) {
        element.classList.add('is-current');
      }
    }
  }
  initCurrent()
  
})