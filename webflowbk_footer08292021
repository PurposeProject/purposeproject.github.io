
<script src="https://purposeproject.github.io/mainfooter.js"></script>

<!-- Save data on every 5 secs for 42 mins and will start over again -->

<script type="text/javascript">

let x = 1;
  
setInterval(function () {
 
  
    if (x > 500)
        x = 1;
    else
        x++;
          $('input[type="text"], textarea').each(function(){    
                let id = $(this).attr('id');
                let value = $(this).val();
                localStorage.setItem(id, value);
        
    });  
}, 5000);

</script>

<!-- Textbox Auto Resize -->

<script>
const tx = document.getElementsByTagName("textarea");
for (let i = 0; i < tx.length; i++) {
  tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
  tx[i].addEventListener("input", OnInput, false);
}

function OnInput() {
  this.style.height = "auto";
  this.style.height = (this.scrollHeight) + "px";
}   
  
</script>

<!-- Media player -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/plyr/3.6.2/plyr.min.js"></script>

<!-- Used for saving images -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.min.js" crossOrigin="anonymous"></script>


<!-- Memberstack --> 
<script src="https://api.memberstack.io/static/memberstack.js?webflow" data-memberstack-id="f68863429f9363b3b4721273c41232b7"> </script> 

<!-- User Tracking Code for www.purposeproject.org -->
<script>
 MemberStack.onReady.then(function(member) {
   if (member.loggedIn) {
     try{
       
       const userProperties = {
         'Name': member["name"],
         'Organization': member["organization"],
         'Email': member["email"],
       }
       
       const mMemberId = {'user_id': member["id"]}
       
       heap.identify(member["email"]);
       heap.addUserProperties(userProperties);
       gtag('config', 'G-F658WW31XR', mMemberId);
       
       
       mixpanel.identify(member["id"]);
       mixpanel.track('Log in');
       mixpanel.people.set_once('First Login Date', new Date());
  	   mixpanel.people.set({
    	
    	"$email": member["email"],
        "Organization": member["organization"]
  }); 
       
     } catch(e) {
       console.log(e)
     }
   }
 })
</script>


<!-- our javascript -->
<script>
// This JS file is for the Purpose Project Webflow site
// an Immediately Invoked Function Expression - to keep everything out of the global scope
(function() {

  // constants and variables up here
  let localMember;
  let localMemberData;

  let activitiesInSkillsTable = [
    {'belonging': ['journeyMapping', 'communityCircles', 'buildingYourTeam']},
    {'hope': ['storiesOfHope', 'valueYouBring', 'gettingUnstuck']},
    {'curiosity': ['curiosityWalkabout', 'goodQuestions', 'interestInspiration']},
    {'selfReflection': ['lifeLenses', 'sharingStrengths', 'interestMapping']},
    {'socialAwareness': ['activeListening', 'changingLenses', 'freshPerspectives']},
    {'creativity': ['explorationBrainstorm', 'inspirationAudit', 'lateralThinking']},
    {'expression': ['inThisMoment', 'shapingSelf', 'mixingMediums']},
    {'contribution': ['whatMattersToMe', 'designingImpact', 'growingYourImpact']},
    {'selfDirection': ['motivationMoments', 'skillBuilding', 'projectPlanning']},
    {'storytelling': ['strongStories', 'draftYourNarrative', 'sharedExperiences']},
    {'advocacy': ['advocacyDefined', 'whatYouNeed', 'beingAnAlly']},
    {'resilience': ['highsAndLows', 'learningToAdapt', 'resilienceToolbox']}
  ]

  // when the DOM has loaded... do stuff
  $(function() {    
    memberStackSetup();
    editDisplayName();
    studentStoriesSetup();
    checkIfLoginDesired();
  })

  // all of our functions go below
  const memberStackSetup = function() {

    // checks to see if member is logged in... then does stuff
    MemberStack.onReady.then(async function(member) {
      // assign the logged-in member to our localMember variable
      localMember = member;
      if (member.loggedIn === true) {
        console.log('member is logged in');
        localMemberData = await member.getMetaData();
        loggedInSetup();
      } else {
        console.log('member is NOT logged in');
        loggedOutSetup();
      }
    })
  }

  const checkIfLoginDesired = function() {
    let hash = window.location.hash.substr(1);
    if (hash === "login") {
      $('#loginlink')[0].click();
      $('#purchaselink')[0].click();
      $('#profilebuttons2')[0].click();
    }
  }

  const loggedInSetup = function() {  
  
    /* Translation Switch Position */
  	weglot.style.margin = '2px 0px 0px 40px';
  
    purchaselink.style.display = 'none';
    modoverlay.style.display = 'none';
    purchasewin.style.display = 'none';
    loginlink.style.display = 'none';
    profileNav.style.display = 'flex';
    showAvatarInNav();
    profilePageSetup();
    showBookmarks();
    markAsCompleteActivity();
    bookmarkActivity();
    
  }

  const loggedOutSetup = function() {
    // User is signed out.
    
    
    /* Translation Switch Position */
    weglot.style.margin = '14px 0px 0px 60px';
    profileNav.style.display = 'none';
    logoutlink.style.display = 'none';
    loginlink.style.display = 'flex';
    purchaselink.style.display = 'flex';
   
    
  }

  const studentStoriesSetup = function() {
    $('.student-square').click(function() {
      let currentStudentId = $(this).data('student');
      $('.student-story-slider .w-slider-dot').eq(currentStudentId-1).trigger('click');
      $('.student-modal').fadeIn();
    });

    $('.student-overlay-exit').click(function() {
      $('.student-modal').fadeOut();
    });

    $(document).keyup(function(e) {
      if (e.keyCode === 27) {
        $('.student-modal').fadeOut();
      }   // esc
    });
  }

  // Profile Page stuff
  const profilePageSetup = function() {
    if ($('.profile-page').length) {
      chooseAvatar();
    
      if (typeof localMemberData.displayName === 'undefined' || localMemberData.displayName === "undefined") {
        profileName.innerText = localMember["email"]
      }
      else if (localMemberData.displayName) {
        profileName.innerText = localMemberData.displayName
      } else {        
        profileName.innerText = localMember["email"]
      } 

      setAvatar();
      profileLearnerLens();
      profileSkills();
      profileBookmarks();
    } 
  }

  const chooseAvatar = function() {
    $('.avatar-choice').click(function() {
      let avatarId = $(this).attr('id');
      $('.profile-big-avatar, .profile-big-avatar default-avatar').hide();
      $('#' + avatarId + '-big').show();

      $('.nav-profile-image').hide();
      $('#nav-' + avatarId).fadeIn();

      if (localMember) {
        var memberAvatar = {
          avatarId: avatarId 
        }
        localMember.updateMetaData(memberAvatar)
      }
      $('.avatar-choice-tooltip').fadeOut();
    });
  }

  const showAvatarInNav = function() {
    if (localMemberData.avatarId) {
      $('.nav-profile-image').hide();
      $('#nav-' + localMemberData.avatarId).fadeIn();
    } else {
      $('.nav-profile-image').hide();
      $('#nav-avatar1').fadeIn();
    }
  }

  const setAvatar = function() {
    if (localMemberData.avatarId) {
      $('.profile-big-avatar, .profile-big-avatar default-avatar').hide();
      $('#' + localMemberData.avatarId + '-big').show();
    }
  }

  // TODO: this should only be called when user is on Profile page.
  const editDisplayName = function() {
    // allow user to edit display name on profile
    $('#profileEditNamePen').click(function() {
      $('#profileName').focus();
      $(this).hide();
      $('#profileNameSaveButton').show();
    });

    $('#profileName').focusin(function() {
      prepareForNameEdit();
    });

    $('#profileNameSaveButton').click(function() {
      prepareForNameEdit();
    });

    function prepareForNameEdit() {
      let newName = $('#profileName').html();

      if (newName.length < 2) {
        return;
      }

      addDisplayNameToMemberStack(newName);
      $('#profileNameSaveButton').hide();
      $('#profileEditNamePen').show();
      $('#profileName').blur();        
    }
  }

  const addDisplayNameToMemberStack = function(newName) {
    if (localMember) {
      var memberDisplayName = {
        displayName: newName 
      }
      localMember.updateMetaData(memberDisplayName)
    }
  }

  // check learner lens in DB and show appropriate content.
  const profileLearnerLens = function() {
    if (localMemberData.learnerLens) {
      $('#no-quiz-in-db-container').hide();
        if (localMemberData.learnerLens === 'epicure') {            
          $('#profile-post-quiz-epicure-content').show();
        }
        if (localMemberData.learnerLens === 'explorer') {
          $('#profile-post-quiz-explorer-content').show();
        }
        if (localMemberData.learnerLens === 'connecter') {
          $('#profile-post-quiz-connecter-content').show();
        }
        if (localMemberData.learnerLens === 'dreamer') {
          $('#profile-post-quiz-dreamer-content').show();
        }
    } else {
      $('#no-quiz-in-db-container').show();
    }
  }

  // write the skills badges and activity checks
  const profileSkills = function() {
    if (localMemberData.activitiesCompleted) {
      localMemberData.activitiesCompleted.forEach(element => {
        var activity = element;
        var skill, badgeId, linkId, linkId;
        $.grep(activitiesInSkillsTable, function(e) {             
          if (jQuery.inArray( activity, Object.values(e)[0] ) !== 0) {
            skill = Object.keys(e)[0];
            badgeId = "#profile-badge-" + skill;
            linkId = "#" + activity + "-check";
            $(linkId).find('.empty-check').hide();
            $(linkId).find('.full-check').show();
            $(badgeId).css('display', 'inline-block');
          }
        });
      }); 
      //show colored badge if all 3 activities in a skill are finished. 
      $( ".profile-badge-container" ).each(function( index ) {
        if ($(this).find('.empty-check:visible').length === 0) {
          $(this).find('.badge-image-gray').hide();
          $(this).find('.badge-image-color').show();
        }
      });
    } else {
      // console.log('no completed activities');
    }
  }

  const profileBookmarks = function() {
    if (localMemberData.bookmarks) {
      let numOfBookmarks = 0;
      localMemberData.bookmarks.forEach(element => {
        var bookmark = element;
        var bookmarkId = "#" + bookmark + "-card";
        $(bookmarkId).css('display', 'flex');
        numOfBookmarks+=1;
      }); 
      bookmarkNumber.innerText = numOfBookmarks;
    }
  }

  // if user is logged in... show bookmarks and activity completed button
  const showBookmarks = function() {
    $('#bookmarkContainer').show();
    $('#activityCompleteButtonContainer').show();
  }

  // create bookmark in memberstack
  const bookmarkThisActivity = function(activity) {
    let bookmarksFromDb = localMemberData.bookmarks || [];
    bookmarksFromDb.push(activity);
    
    let bookmarksJson = {
      'bookmarks': bookmarksFromDb
    }
    localMember.updateMetaData(bookmarksJson);
    $('.bookmark-incomplete').hide();
    $('.bookmark-complete').show();
  }
  $('#bookmarkMe').click(function() {
    let activity = $('body').data('activity');
    bookmarkThisActivity(activity);
  });

  // remove bookmark from firebase
  var unBookmark = function(activity) {
    if (localMemberData.bookmarks) {          
      localMemberData.bookmarks.forEach( (element, index) => {            
        if (element === activity) {
          localMemberData.bookmarks.splice(index, 1);

          let bookmarksJson = {
            'bookmarks': localMemberData.bookmarks
          }
          localMember.updateMetaData(bookmarksJson);

          $('.bookmark-complete').hide();
          $('.bookmark-incomplete').show();
          return;
        }
      }); 
    }
  }
  $('#unbookmarkMe').click(function() {
    let activity = $('body').data('activity');
    unBookmark(activity);
  });

  // mark activity as bookmarked if it's in the db
  function bookmarkActivity() {
    // if the page has an bookmarkMe id
    // get the data-activity value of that button from the DOM
    // check if the database has that activity
    // switch the button to "bookmarked"
    if ($('#bookmarkMe').length) {
      let currentActivity = $('body').data('activity');
        
      if (localMemberData.bookmarks) {
        var arrayContainsThisBookmark = (localMemberData.bookmarks.indexOf(currentActivity) > -1);
        if (arrayContainsThisBookmark) {
          $('.bookmark-incomplete').hide();
          $('.bookmark-complete').show();
        } else {
          // console.log('this bookmark not in DB: ', currentActivity);
        }
      }
    } 
  }

  // Activity / Firebase functionality
  const markAsCompleteActivity = function() {
    // if the page has an activityCompleteButton id
    // get the data-activity value of that button from the DOM
    // check if the database has that activity
    // switch the button to "completed"
    if ($('#activityCompleteButton, #activityCompleteButton2, #activityCompleteButton3').length) {
      let currentActivity = $('body').data('activity');
        
      if (localMemberData.activitiesCompleted) {
        var arraycontainsthisActivity = (localMemberData.activitiesCompleted.indexOf(currentActivity) > -1);
        if (arraycontainsthisActivity) {
          $('.activity-complete-button').hide();
          $('.complete_activity_btn').hide();
          $('.activity-is-complete-button').css('display', 'inline-block');
          $('.activity_completed_btn').css('display', 'inline-block');
        } else {
          // console.log('this activity not in DB: ', currentActivity);
        }
      }
    } 
  }

  // mark activity as complete in MemberStack
  const activityCompleted = function(activity) {
    let newactivitiesCompletedFromDb = localMemberData.activitiesCompleted || [];
    newactivitiesCompletedFromDb.push(activity);
    
    let completedActivitiesJson = {
      'activitiesCompleted': newactivitiesCompletedFromDb
    }
    localMember.updateMetaData(completedActivitiesJson);
  }

  $('#activityCompleteButton').click(function() {
    let activity = $('body').data('activity');
    if (localMember.loggedIn) {
      $('.activity-complete-button').hide();
      $('.activity-is-complete-button').css('display', 'inline-block'); 
      activityCompleted(activity);
    }
  });

  // remove activity from firebase
  const activityUnCompleted = function(activity) {
    if (localMemberData.activitiesCompleted) {          
      localMemberData.activitiesCompleted.forEach( (element, index) => {            
        if (element === activity) {
          localMemberData.activitiesCompleted.splice(index, 1);

          let completedActivitiesJson = {
            'activitiesCompleted': localMemberData.activitiesCompleted
          }
          localMember.updateMetaData(completedActivitiesJson);

          $('#activityIsCompleteButton').hide();
          $('#activityCompleteButton').show();
          return;
        }
      }); 
    }
  }
  $('#activityIsCompleteButton').click(function() {
    let activity = $('body').data('activity');
    activityUnCompleted(activity);
  });
  

  

  // QUIZ Logic -->
  $(function() {
    var epicureScore = 0;
    var explorerScore = 0;
    var connecterScore = 0;
    var dreamerScore = 0;

    $('.quiz-button').click(function() {
      $(this).siblings().removeClass('selected');
      $(this).addClass('selected');
  
      setTimeout(function() {
        $('#quiz-next').trigger('click');
      }, 300);
    });

    $('#quiz-slide-7 .quiz-button').click(function() {
      tallyQuizScore();
    });

    var tallyQuizScore = function() {
      epicureScore = 0;
      explorerScore = 0;
      connecterScore = 0;
      dreamerScore = 0;

      $('.quiz-button.selected').each(function(index) {
        var amountToAdd = 1;

        // if it's the last slide give an additional .5 points
        if ($(this).parents('#quiz-slide-7').length) {
          amountToAdd = 1.5;
        } else {
          amountToAdd = 1;
        }
        
        if ($(this).data('cat') === "epicure") {
          epicureScore = epicureScore + amountToAdd;
        }
        if ($(this).data('cat') === "explorer") {
          explorerScore = explorerScore + amountToAdd;
        }
        if ($(this).data('cat') === "connecter") {
          connecterScore = connecterScore + amountToAdd;
        }
        if ($(this).data('cat') === "dreamer") {
          dreamerScore = dreamerScore + amountToAdd;
        }
      });

      var scores = [epicureScore, explorerScore, connecterScore, dreamerScore];
      var winningScoreNum = Math.max(...scores);

      // if there is a tie, break the tie in this order:
      // 1. Explore, 2. Dreamer, 3. Epicure, 4. Connect

      console.log('explorerScore: ', explorerScore);
      console.log('dreamerScore: ', dreamerScore);
      console.log('epicureScore: ', epicureScore);
      console.log('connecterScore: ', connecterScore);
      
      // hide whatever quiz winner might already by open
      $('.post-quiz-container').hide();

      if (explorerScore === winningScoreNum) {
        saveWinnerToMemberStack('explorer');
        $('#post-quiz-explorer-content').show();
      }

      if (dreamerScore === winningScoreNum && explorerScore !== winningScoreNum) {
        saveWinnerToMemberStack('dreamer');
        $('#post-quiz-dreamer-content').show();
      }

      if (epicureScore === winningScoreNum && dreamerScore !== winningScoreNum && explorerScore !== winningScoreNum) {
        saveWinnerToMemberStack('epicure');
        $('#post-quiz-epicure-content').show();
      }

      if (connecterScore === winningScoreNum && epicureScore !== winningScoreNum && dreamerScore !== winningScoreNum && explorerScore !== winningScoreNum) {
        saveWinnerToMemberStack('connecter');
        $('#post-quiz-connecter-content').show();
      }

      // write to firebase with the winning quiz
      function saveWinnerToMemberStack(winner) {
        if (localMember.loggedIn) {
          var memberLearnerLens = {
            learnerLens: winner 
          }
          localMember.updateMetaData(memberLearnerLens)
        }
      }
    };
  }) 

// end of Immediately invoked function that protects the global namespace
})();



var Webflow = Webflow || [];
Webflow.push(function() {
var curUrl = location.pathname;
let curHref;
  $('a').each(function() {
    curHref = $(this).attr('href');
    if(curHref != '/') {
      $(this).toggleClass('w--current', curUrl.indexOf($(this).attr('href')) != -1);
    }
    if (curUrl.indexOf("skills/") !== -1 && curHref.indexOf("skills") !== -1) {
      $(this).toggleClass('w--current');
    }
    if (curUrl.indexOf("/activities/") !== -1 && curHref.indexOf("skills") !== -1) {
      $(this).toggleClass('w--current');
    }

  });
});



  
  
  
</script>





