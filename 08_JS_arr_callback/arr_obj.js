let std = [
    {
        id: 1, 
        name: "krisha",
        emai: "krisha@gmail.com",
        course: "FSD"
    },
    {
        id:2,
        name: "amit",
        emai: "amit@gmail.com",
        course: "AI/ML"
    },
    {
        id:3,
        name: "Sanjay",
        emai: "sanjay@gmail.com",
        course: "FSD"
    },
    {
        id:4,
        name: "yashwi",
        emai: "yashwi@gmail.com",
        course: "AI/ML"
    },
    {
        id:5,
        name: "jay",
        emai: "jay@gmail.com",
        course: "UI/UX"
    },
    {
        id:6,
        name: "krishnal",
        emai: "krishnal@gmail.com",
        course: "UI/UX"
    },
]


// forEach does not reaturn

// std.forEach((ele)=> console.log(ele))
// std.forEach((ele)=>ele.course == "FSD" ? console.log(ele.name): null)

// std.map((ele)=>ele.course == "FSD" ? console.log(ele): null)
// let FSD = std.map((ele)=>ele.course == "FSD" ? console.log(ele): null)

// console.log(FSD)


// let fsd = std.filter((ele)=> console.log(ele))
// let fsd = std.filter((ele)=>ele.course == "FSD")

// console.log(fsd)

Std = std.map((ele)=> {
     ele.branch = "bhavnagar";
    if(ele.course == "FSD")
    {
        ele.faculty = "Alishan Shaikh"
    }
    else if(ele.course == "UI/UX")
    {
        ele.faculty = "Chitraparna Banergy"
    }
    else {
        ele.faculty = "Mohit sir"
    }
    return ele;
})

console.log(std)