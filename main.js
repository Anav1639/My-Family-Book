var images  = ["https://i.postimg.cc/wjMnFtMX/father.jpg",
"https://i.postimg.cc/bw5W5zSK/mother.jpg",
"https://i.postimg.cc/5ymDKL83/bro.jpg"
]

var names = ["Nitin Agarwal","Aarti Agarwal","Arin Agarwal"]

var i = 0 

function next_slide(){
    i++;
    var number=3 
    if(i>number){
        i=0
    }
    var updated_image =images[i] ;
    var updated_names = names[i]
    document.getElementById("img1").src = updated_image;
    document.getElementById("member_name").innerHTML = updated_names;
}