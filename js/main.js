$(function() {
    $('#fullpage').fullpage({
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
        menu: '#myMenu',
        verticalCentered: false,
        navigation: true,
        navigationTooltips: ['它，终于来了', '真正与你贴近的设备', '重要的是不要错过', '产品展示'],
        css3: true,
        afterLoad: function(link, index) {
            switch (index) {
                case 1:
                    move('.sec1 h1').scale(1.5).end()
                    move('.sec1 p').set('margin-top', '5%').end()
                    break;
                case 2:
                    move('.sec2 h1').scale(0.6).end()
                  break;
                case 3:
                    move('.sec3 h1').set('margin-left', '20%').end()
                    move('.sec3 p').set('margin-left', '20%').end()
                    break;
                case 4:
                    move('.sec4 img.primary').rotate(360).end(function() {
                        move('.sec4 img.edition').rotate(360).end(function() {
                            move('.sec4 img.sport').rotate(360).end(function() {
                                move('.sec4 h4.primary').scale(1.3).end(function() {
                                    move('.sec4 h4.edition').scale(1.3).end(function() {
                                        move('.sec4 h4.sport').scale(1.3).end();
                                    })
                                })
                            })
                        })
                  })
                  break;
                default:
                  break;
            }
        },
        onLeave: function(index, nextIndex, direction) {
            switch (index) {
                case 1:
                  move('.sec1 h1').scale(1).end()
                  move('.sec1 p').set('margin-top', '800px').end()
                  break;
                case 2:
                  move('.sec2 h1').scale(1).end()
                  break;
                case 3:
                  move('.sec3 h1').set('margin-left', '-1500px').end()
                  move('.sec3 p').set('margin-left', '1500px').end()
                  break;
                case 4:
                  move('.sec4 img.primary').rotate(-360).end()
                  move('.sec4 img.edition').rotate(-360).end()
                  move('.sec4 img.sport').rotate(-360).end()
                  move('.sec4 h4.primary').scale(1).end()
                  move('.sec4 h4.edition').scale(1).end()
                  move('.sec4 h4.sport').scale(1).end()
                break;
                default:
                break;
            }
        }
    });
});
