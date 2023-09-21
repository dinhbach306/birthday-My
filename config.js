var config = {
  // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
  // 每句话尽量不要超过15个字,不然展示效果可能不太好
  texts: [
    "Chúc mừng sinh nhật 18 của em. Anh mong em", //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
    "Cười nhiều", // 同上...
    "Hạnh Phúc",
    "Xinh Đẹp",
    "Phi Thường",
    "Nỗ lực",
    "Yêu thương",
    "Phát triển",
    "Bình yên",
    "Tự tin",
    "Gặp đúng người vì em mà nuông chiều, yêu thương em ❤️'",
    "Thích em, Thương em, Nhớ em là thật",
  ],
  /**
   * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
   * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
   * 例如
   * "心爱的小可爱": "./imgs/xiaokeai.jpg"
   *
   * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
   * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
   */
  imgs: {
    心爱的小可爱: "./imgs/my.jpg",
    // "今天是你的生日": "./imgs/birthday.jpg",
  },
  // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
  desc: {
    turn_on: "Bắt đầu😚",
    play: "Một chút nhạc nhó🎶",
    bannar_coming: "Hình như thiếu băng rôn...🤔",
    balloons_flying: "Không khí còn hơi nhợt nhạt nhỉ🥺",
    cake_fadein: "Hmm, anh thấy mình bị thiếu cái bánh kem ý🎂",
    light_candle: "Khoan, đã có bánh kem thì nến đâuu😒",
    wish_message: "giờ em hãy ước đi 🥰",
    story: "ước xong rồi, thì anh có chút đôi lời ❤️",
  },
};
