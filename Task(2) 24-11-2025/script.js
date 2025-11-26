const reels = [
  {
    ismute: true,
    username: "travel_with_mia",
    likeCount: 12400,
    isLiked: false,
    commentCount: 343,
    caption: "Sunset vibes 🌅✨",
    video: "./Videos/2.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/12.jpg",
    shareCount: 120,
    isFollowed: true,
  },
  {
    ismute: true,
    username: "Family_man_Shri",
    likeCount: 8800,
    isLiked: true,
    commentCount: 210,
    caption: "TASC Agent🔥",
    video: "./Videos/1.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/22.jpg",
    shareCount: 95,
    isFollowed: false,
  },
  {
    ismute: true,
    username: "fit_lifestyle",
    likeCount: 54200,
    isLiked: false,
    commentCount: 1200,
    caption: "No excuses 💪🏽",
    video: "./Videos/3.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/5.jpg",
    shareCount: 600,
    isFollowed: true,
  },
  {
    ismute: true,
    username: "coding.hub",
    likeCount: 19700,
    isLiked: true,
    commentCount: 350,
    caption: "JavaScript > Everything 😂",
    video: "https://www.pexels.com/download/video/3694919/",
    userProfile: "https://randomuser.me/api/portraits/men/44.jpg",
    shareCount: 200,
    isFollowed: false,
  },
  {
    ismute: true,
    username: "petlover.lucy",
    likeCount: 31200,
    isLiked: false,
    commentCount: 890,
    caption: "Cutest dog ever 🐶💕",
    video: "https://www.pexels.com/download/video/34922982/",
    userProfile: "https://randomuser.me/api/portraits/women/30.jpg",
    shareCount: 180,
    isFollowed: true,
  },
  {
    ismute: true,
    username: "street_photography",
    likeCount: 9500,
    isLiked: false,
    commentCount: 190,
    caption: "Street stories 📸",
    video: "https://www.pexels.com/download/video/34764177/",
    userProfile: "https://randomuser.me/api/portraits/men/9.jpg",
    shareCount: 80,
    isFollowed: false,
  },
  {
    ismute: true,
    username: "fashion_diaries",
    likeCount: 64000,
    isLiked: true,
    commentCount: 2300,
    caption: "New look 👗🔥",
    video: "https://www.pexels.com/download/video/32220524/",
    userProfile: "https://randomuser.me/api/portraits/women/19.jpg",
    shareCount: 500,
    isFollowed: true,
  },
  {
    ismute: true,
    username: "gaming_zone",
    likeCount: 120000,
    isLiked: true,
    commentCount: 4200,
    caption: "Pro gamer mode 🎮🔥",
    video: "https://www.pexels.com/download/video/8345154/",
    userProfile: "https://randomuser.me/api/portraits/men/28.jpg",
    shareCount: 2600,
    isFollowed: false,
  },
  {
    ismute: true,
    username: "dancevibes",
    likeCount: 45500,
    isLiked: false,
    commentCount: 1600,
    caption: "Dance like no one is watching 💃🎶",
    video: "https://www.pexels.com/download/video/30647897/",
    userProfile: "https://randomuser.me/api/portraits/women/8.jpg",
    shareCount: 420,
    isFollowed: true,
  },
  {
    ismute: true,
    username: "car_world",
    likeCount: 78000,
    isLiked: true,
    commentCount: 3100,
    caption: "Dream car unlocked 🚗🔥",
    video: "https://www.pexels.com/download/video/26793680/",
    userProfile: "https://randomuser.me/api/portraits/men/3.jpg",
    shareCount: 1200,
    isFollowed: false,
  },
];
let allReels = document.querySelector(".allReels");

function addFunct() {
  let sum = "";

  reels.forEach(function (elem, idx) {
    sum += `  <div class="reel">
      <video autoplay loop ${elem.ismute ? "muted" : ""} src="${
      elem.video
    }"></video>
      <div id='${idx}' class="mute">
        ${
          elem.ismute
            ? '<i class="ri-volume-up-line"></i>'
            : '<i class="ri-volume-mute-fill"></i>'
        }</i>
      </div>
           <div class="bottom">
              <div class="user">
                <img
                  src="${elem.userProfile}"
                  alt=""
                />
                <h4>${elem.username}</h4>
                <button id='${idx}' class="follow">${
      elem.isFollowed ? "Unfollow" : "Follow"
    }</button>
              </div>
              <h3>${elem.caption}</h3>
            </div>
            <div class="right">
              <div id="${idx}" class="like">
                <h4 class="like-icon">${
                  elem.isLiked
                    ? '<i class="love ri-heart-3-fill"></i>'
                    : '<i class="ri-heart-3-line"></i>'
                }</h4>
                <h6>${elem.likeCount}</h6>
              </div>
              <div class="comment">
                <h4 class="comment-icon"><i class="ri-chat-3-line"></i></h4>
                <h6>${elem.commentCount}</h6>
              </div>
              <div class="share">
                <h4 class="share-icon"><i class="ri-share-line"></i></h4>
                <h6>${elem.shareCount}</h6>
              </div>
              <div class="menu">
                <h4 class="menu-icon"><i class="ri-more-2-fill"></i></h4>
              </div>
            </div>
          </div>`;
  });

  allReels.innerHTML = sum;
}

addFunct();

allReels.addEventListener("click", function (elem) {
  if (elem.target.className === "like") {
    if (!reels[elem.target.id].isLiked) {
      reels[elem.target.id].likeCount++;
      reels[elem.target.id].isLiked = true;
    } else {
      reels[elem.target.id].likeCount--;
      reels[elem.target.id].isLiked = false;
    }
    addFunct();
  }

  if (elem.target.className === "follow") {
    if (!reels[elem.target.id].isFollowed) {
      reels[elem.target.id].isFollowed = true;
    } else {
      reels[elem.target.id].isFollowed = false;
    }
    addFunct();
  }
  if (elem.target.className === "mute") {
    if (!reels[elem.target.id].ismute) {
      reels[elem.target.id].ismute = true;
    } else {
      reels[elem.target.id].ismute = false;
    }
    addFunct();
  }
});
