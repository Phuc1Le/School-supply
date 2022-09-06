function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
var data = [
    {
        id: 1,
        picture: "./imge/vo.jpg",
        des: "Box 5 vở ô ly 48 trang",
        price: "40000"
    },
    {
        id: 2,
        picture: "./imge/vo2.jpg",
        des: "Box 5 vở ô ly 100 trang",
        price: "90000"
    },
    {
        id: 3,
        picture: "./imge/ktra.jpg",
        des: "Bộ 25 giấy kiểm tra",
        price: "60000"
    },
    {
        id: 4,
        picture: "./imge/s9.jpg",
        des: "Bộ sách giáo khoa lớp 9",
        price: "500000"
    },
    {
        id: 5,
        picture: "./imge/nc1.jpg",
        des: "Bộ sách Toán nâng cao thi chuyên vào lớp 10",
        price: "1000000"
    },
    {
        id: 6,
        picture: "./imge/bt.jpg",
        des: "Bài tây",
        price: "20000"
    },
    {
        id: 7,
        picture: "./imge/cv.jpg",
        des: "Cờ vua",
        price: "100000"
    },
    {
        id: 8,
        picture: "./imge/ru.jpg",
        des: "Rubik",
        price: "18000"
    },
    {
        id: 9,
        picture: "./imge/ro.jpg",
        des: "Robot",
        price: "200000"
    },
    {
        id: 10,
        picture: "./imge/xe.jpg",
        des: "Bộ 5 xe mô hình",
        price: "400000"
    },
    {
        id: 11,
        picture: "./imge/nc2.jpg",
        des: "Sách Anh nâng cao thi chuyên vào lớp 10",
        price: "1800000"
    },
    {
        id: 12,
        picture: "./imge/ki.png",
        des: "Kiếm ánh sáng",
        price: "22000"
    },
];
for(let i =0; i < data.length; i++){
    addDiv(i)
}
function addDiv(i){
    var add = document.createElement("div")
    Pdes = data[i].des
    Pimg = data[i].picture
    Pprice = data[i].price
    var inside = '<div class = "bs"><h3>'+Pdes+'</h3><img src='+Pimg+' alt="" width="200px" height="200px"><td><p><span class = "Price">'+Pprice+'</span><sup>đ</sup></p></td><button>Thêm vào giỏ hàng</button></div>'
    add.innerHTML = inside
    var Price = document.querySelector(".best .item")
    Price.append(add)
}