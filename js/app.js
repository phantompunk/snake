// $(document).foundation()

$(function(){
  var pause = 1500;
  $('#type').typeIt({
      //  strings: ["hungry developer  pursuing an undergrad degree", "But here is a better one."],
       speed: 60,
       breakLines: false,
       autoStart:true,
       cursor:true,
       startDelete: true,
       startDelay: 1500,
       loop: true
  })
  .tiType('I am a developer')
  .tiPause(pause)
  .tiDelete(9)
  .tiType('hiker')
  .tiPause(pause)
  .tiDelete(6)
  .tiType('n adventurer')
  .tiPause(pause)
  .tiDelete(10)
  .tiType('otaku')
  .tiPause(pause)
  .tiDelete(7)
  .tiType(' Spartan')
  .tiPause(pause)
  .tiDelete(7)
  .tiType('Marathoner')
  .tiPause(pause)
  .tiDelete(10)
  .tiType('explorer');
});
