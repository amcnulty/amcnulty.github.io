if (window.attachEvent) {window.attachEvent('onload', load);}
else if (window.addEventListener) {window.addEventListener('load', load, false);}
else {document.addEventListener('load', load, false);}
function load() {
            // CONSTRUCTORS
    // Constructor for the panel object in the player profile page
    // The tab is what the user clicks on and the content is shown
    function Panel(tab, content) {
        this.tab = tab;
        this.content = content;
    }
    // Constructor for the filter button object in the player profile page
    // Parameters:
    // Button: For the filter button
    // Filter: For the function call to filter the school shown
    function FilterButton(button, filter) {
        this.button = button;
        this.filter = filter;
        this.button.addEventListener("click", function() {
            var nameOfClass = button.className;
            if (nameOfClass == "filterButton") {
                nameOfClass = "filterButton-selected";
                filter(true);
            }
            else if (nameOfClass == "filterButton-selected") {
                nameOfClass = "filterButton";
                filter(false);
            }
            button.className = nameOfClass;
        }, false);
    }
            // FUNCTIONS
    // Sets up variables on the page
    function init() {
        for (var i = 0; i < videoLists.length; i++) {
            videoLists[i].style.marginLeft = "0px";
        }
        playerProfile.style.visibility = "hidden";
        for (var i = 0; i < tabs.length; i++) {
            panels[i] = new Panel(tabs[i], content[i]);
            tabs[i].addEventListener("click", changeTab, false);
        }
    }
    // Highlights the current tab and shows its content
    function changeTab(e) {
        clearTabs();
        clearContent();
        e.target.parentElement.className = "tab tab-selected";
        for (var i = 0; i < panels.length; i++) {
            if (panels[i].tab == e.target.parentElement) {
                panels[i].content.style.visibility = "visible";
            }
        }
    }
    // Clears all the tabs from being selected
    function clearTabs() {
        for (var i = 0; i < panels.length; i++) {
            panels[i].tab.className = "tab";
        }
    }
    // Clears all the content from being shown when a tab is clicked on
    function clearContent() {
        for (var i = 0; i < panels.length; i++) {
            panels[i].content.style.visibility = "hidden";
        }
    }
    // Starts the animation to show the sign in tab
    function showSignIn(e) {
        plusSign.style.visibility = "hidden";
        signInTab.className = "signInTab-visible";
    }
    // Starts the animation to hide the sign in tab
    function hideSignIn(e) {
        signInTabOverlay.style.visibility = "hidden";
        signInTab.className = "signInTab";
    }
    // Shows the login form on the sign in tab after animation
    function showOverlay(e) {
        if (signInTab.className == "signInTab-visible") {
            signInTabOverlay.style.visibility = "visible";
        }
        else {
            plusSign.style.visibility = "visible";
        }
    }
    // Scrolls a carousel to the left
    function scrollCarouselLeft(e) {
        currentList = e.target.parentElement.children[2];
        marginChange = 1;
        scrollCarousel = setInterval(changeLeftMargin, 1);
    }
    // Scrolls a carousel to the right
    function scrollCarouselRight(e) {
        currentList = e.target.parentElement.children[2];
        marginChange = -1;
        scrollCarousel = setInterval(changeLeftMargin, 1);
    }
    // Sets the margin of the current list of videos to make them scroll
    function changeLeftMargin() {
        var marginLeft = parseInt(currentList.style.marginLeft);
        if (marginLeft <= 0 && marginLeft >= -((currentList.children.length - 3) * 334)) {
            marginLeft += marginChange;
            if (marginLeft > 0) marginLeft = 0;
            else if (marginLeft < -((currentList.children.length - 3) * 334)) marginLeft = -((currentList.children.length - 3) * 334); 
            currentList.style.marginLeft = marginLeft + "px";
        }
    }
    // Stops the scrolling of a carousel
    function stopCarouselScrolling(e) {
        clearInterval(scrollCarousel);
    }
    // Plays the main video
    function playMainVideo(e) {
        mainVideoPlayButton.style.visibility = "hidden";
        mainVideoTitle.style.visibility = "hidden";
        mainVideo.setAttribute("controls", "controls");
        mainVideo.play();
    }
    // Opens the video pop up screen
    function openVideo(e) {
        if (e.target.parentElement.children[0].src != undefined) {
            videoPlayerWrapper.style.visibility = "visible";
            theVid.src = e.target.parentElement.children[0].src;
            playerCard.style.visibility = "visible";
            greyBlur.className = "greyBlur greyBlur-visible";
        }
    }
    // Hides the video pop up screen
    function hideVideo(e) {
        videoPlayerWrapper.style.visibility = "hidden";
        theVid.pause();
        theVid.src = "";
        greyBlur.className = "greyBlur";
        if (playerProfile.style.visibility == "hidden") playerCard.style.visibility = "hidden";
    }
    // Opens the full player profile when profile card is clicked
    function openProfile(e) {
        // Close the video player
        landingPage.style.visibility = "hidden";
        playerProfile.style.visibility = "visible";
        hideVideo();
        playerCard.className = "playerCard-change";
        // Preselect the first item on the dashboard
        clearTabs();
        clearContent();
        panels[0].tab.className = "tab tab-selected";
        panels[0].content.style.visibility = "visible";
    }
    // Closes the player profile and returns to home screen
    function backToHome(e) {
        landingPage.style.visibility = "visible";
        playerProfile.style.visibility = "hidden";
        playerCard.className = "playerCard";
        playerCard.style.visibility = "hidden";
        clearContent();
    }
    // Adds the current player to the coach's look list
    function addToLookList(e) {
        console.log("TODO: Add player to coach's look list");
    }
    // Functions for the filter buttons in the player profile schools panel
    // Parameters:
    // applyFilter: boolean true if filter needs to be applied false if it need be removed.
    // Called when attended camps filter button is pressed
    var campsFilter = function(applyFilter) {
        if (applyFilter) {
            console.log("TODO: apply filter based on attended camps");
        }
        else {
            console.log("TODO: remove filter based on attended camps");
        }
    }
    // Called when the offical visits filter button is pressed
    var visitsFilter = function(applyFilter) {
        if (applyFilter) {
            console.log("TODO: apply filter based on offical visits");
        }
        else {
            console.log("TODO: remove filter based on offical visits");
        }
    }
    // Called when the offered by filter button is pressed
    var offerFilter = function(applyFilter) {
        if (applyFilter) {
            console.log("TODO: apply filter based on offered by");
        }
        else {
            console.log("TODO: remove filter based on offered by");
        }
    }
    // Called when the signed loi filter button is pressed
    var signedFilter = function(applyFilter) {
        if (applyFilter) {
            console.log("TODO: apply filter based on signed loi");
        }
        else {
            console.log("TODO: remove filter based on signed loi");
        }
    }

            // VARIABLES
    // The plus sign on the sign in tab right side of the screen;
    var plusSign = document.getElementById("plusSign");
    // The sign in tab that comes out of right side of screen;
    var signInTab = document.getElementById("signInTab");
    // The content for the sign in tab when it is visible
    var signInTabOverlay = document.getElementById("signInOverlay");
    // The minus sign on the sign in tab when it is visible
    var minusSign = document.getElementById("minusSign");
    
    // The landing page content
    var landingPage = document.getElementById("landingWrapper");
    // The main video on the home screen
    var mainVideo = document.getElementById("mainVideo");
    // The main video play buttons
    var mainVideoPlayButton = document.getElementById("mainVideoPlayButton");
    // The main video title
    var mainVideoTitle = document.getElementById("mainVideoTitle");
    // An array of all the videos in all the carousels
    var videos = document.getElementsByClassName("video");
    
    // A collection of the video lists
    var videoLists = document.getElementsByClassName("videoList");
    // A collection of the left arrows for the video carousels
    var leftArrows = document.getElementsByClassName("carouselLeft");
    // A collection of the right arrows for the video carousels
    var rightArrows = document.getElementsByClassName("carouselRight");
    // Used to control the scrolling of the video carousel
    var scrollCarousel = null;
    // This variable gets set to the current video list that is being scrolled
    var currentList = null;
    // This variable is set to 1 or -1 for left or right scrolling respectively
    var marginChange = null;

    // The wrapper div for the pop up video player
    var videoPlayerWrapper = document.getElementById("videoPlayerWrapper");
    // The exit button for the video player pop up
    var VPWexitButton = document.getElementById("VPWexitButton");
    // The video on the video player pop up
    var theVid = document.getElementById("theVid");
    // The grey blur for when video player is openVideo
    var greyBlur = document.getElementById("greyBlur");
    // The player info card that shows basics about the player
    var playerCard = document.getElementById("playerCard");
    // The clickable area in the player card to take you to the profile
    var clickableArea = document.getElementById("clickableArea");
    // The add to look list button on the player card
    var lookListButton = document.getElementById("lookListButton");
    
    // The player profile page
    var playerProfile = document.getElementById("playerProfilePage");
    // An array of panels
    var panels = [];
    // A collection of all the panel tabs
    var tabs = document.getElementsByClassName("tab");
    // A collection of all the panel content
    var content = document.getElementsByClassName("panelContent");
    // The return to home button on the player profile page
    var backToHomeButton = document.getElementById("profileExitButton");

    // Filter buttons in the school section of player profile:
    // Attended camps button
    var campsFilterButton = new FilterButton(document.getElementById("campsFilterButton"), campsFilter);
    // Offical visits button
    var visitsFilterButton = new FilterButton(document.getElementById("visitsFilterButton"), visitsFilter);
    // Offered by button
    var offerFilterButton = new FilterButton(document.getElementById("offerFilterButton"), offerFilter);
    // Signed LOI button
    var signedFilterButton = new FilterButton(document.getElementById("signedFilterButton"), signedFilter);

            // EVENT LISTENERS
    // Listeners for the sign in tab
    plusSign.addEventListener("click", showSignIn, false);
    signInTab.addEventListener("transitionend", showOverlay, false);
    minusSign.addEventListener("click", hideSignIn, false);

    // Listeners for the carousel scrolling
    for (var i = 0; i < leftArrows.length; i++) {
        leftArrows[i].addEventListener("mouseenter", scrollCarouselLeft, false);
    }
    for (var i = 0; i < leftArrows.length; i++) {
        leftArrows[i].addEventListener("mouseleave", stopCarouselScrolling, false);
    }
    for (var i = 0; i < rightArrows.length; i++) {
        rightArrows[i].addEventListener("mouseenter", scrollCarouselRight, false);
    }
    for (var i = 0; i < rightArrows.length; i++) {
        rightArrows[i].addEventListener("mouseleave", stopCarouselScrolling, false);
    }

    // Listeners for the videos and their play buttons
    for (var i = 0; i < videos.length; i++) {
        videos[i].addEventListener("click", openVideo, false);
    }
    // Listener for the main video play button
    mainVideoPlayButton.addEventListener("click", playMainVideo, false);
    // Listeners for hiding the video pop up window
    // Listener for the grey blur when it is clicked on
    greyBlur.addEventListener("click", hideVideo, false);
    // Listener for the escape key
    document.addEventListener("keyup", function(e) {
        if(e.keyCode == 27) hideVideo();
    }, false);
    // The exit button on the video player
    VPWexitButton.addEventListener("click", hideVideo, false);
    // Listener for the player card click
    clickableArea.addEventListener("click", openProfile, false);
    // Listener for the add to look list button
    lookListButton.addEventListener("click", addToLookList, false);
    // Listener for the back to home button
    backToHomeButton.addEventListener("click", backToHome, false);
    
    init();
}