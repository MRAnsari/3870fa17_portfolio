var randpic = new Array("images/thumbnails/t_character_action.png",
                        "images/thumbnails/t_character_dragon.png",
                        "images/thumbnails/t_character_knight.png",
                        "images/thumbnails/t_octoprincess.png",
                        "images/thumbnails/t_product_mercy.png",
                        "images/thumbnails/t_spiderlady.png",
                        "images/thumbnails/t_unicorn_1.png",
                        "images/thumbnails/t_unicorn_2.png",
                        "images/thumbnails/t_unicorn_3.png",
                        "images/thumbnails/t_unicorn_4.png",
                        "images/thumbnails/t_unicorn_5.png",
                        "images/thumbnails/t_unicorn_7.png");

var randnumb = Math.floor(Math.random() * randpic.length);

var randnumb2 = Math.floor(Math.random() * randpic.length);

document.getElementById("randomimage").src = randpic[randnumb];

document.getElementById("randomimage2").src = randpic[randnumb2];
