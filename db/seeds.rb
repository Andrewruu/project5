
user = User.create(
    display_name: "Andrew",
    password_digest: BCrypt::Password.create("test"),
    email: "andrewruujin@gmail.com"
)
publisher1 = Publisher.create(
  name: "Qidain",
  website: "https://www.webnovel.com/"
)
translator1 = Translator.create(
  name: "Seanboi",
  website: "https://www.wuxiaworld.com/"
)
novel1 = Novel.create(
  name: "Unrivaled Tang Sect",
  image: "https://cdn.novelupdates.com/images/2017/03/eyJ1cmwiOiJodHRwczovL2Nkbi5kaXNjb3JkYXBwLmNvbS9hdHRhY2htZW50cy8yNjAzMjI5MTgxMTcwMTU1NTIvMjg5MTY5MjcyMDIwNzk1MzkyL0hZSC5qcGVnIn0.jpeg",
  description: "The legend of the continent, the battle that brought fame; the Sacred Phoenix Lady, the Windfire Meteor Godrealm saber-art; the pair that ascend and fuse, the golden sun and the blue moon, the fury of the crashing thunder. There is no magic, no battle qi, nor any martial arts in this land. However, there are martial spirits. Ten thousand years have passed since the founding of the Tang Sect on the Douluo continent, and it has declined. A new, proud generation of heaven’s chosen has been born. Can the new generation of Shrek’s Seven Devils rally the Tang Sect and once more compose the song of the Unrivaled Tang Sect.",
  user_id: user.id,
  publisher_id: publisher1.id, 
  translator_id: translator1.id
)