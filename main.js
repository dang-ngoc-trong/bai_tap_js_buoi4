// bài tap 1
document.getElementById("btnSapXep").onclick = function () {
  //input; sothu1,sothu2,sothu3 : number
  var a = Number(document.getElementById("soThu1").value);
  var b = Number(document.getElementById("soThu2").value);
  var c = Number(document.getElementById("soThu3").value);
  //output : kết quả number
  var ketQua = "";
  if (c > b && b > a) {
    ketQua = a + "<" + b + "<" + c;
  } else if (a > b && b > c) {
    ketQua = c + "<" + b + "<" + a;
  } else if (b > c && c > a) {
    ketQua = a + "<" + c + "<" + b;
  } else if (b > a && a > c) {
    ketQua = c + "<" + a + "<" + b;
  } else if (a > c && c > b) {
    ketQua = b + "<" + c + "<" + a;
  } else if (a === b && b === c) {
    ketQua = a + "=" + b + "=" + c;
  } else if (a === b && b > c) {
    ketQua = c + "<" + a + "=" + b;
  } else if (a === c && c > b) {
    ketQua = b + "<" + a + "=" + c;
  } else if (b === c && c > a) {
    ketQua = a + "<" + b + "=" + c;
  } else if (a === b && c > b) {
    ketQua = a + "=" + b + "<" + c;
  } else if (a === c && b > c) {
    ketQua = a + "=" + c + "<" + b;
  } else if (b === c && a > c) {
    ketQua = b + "=" + c + "<" + a;
  } else {
    ketQua = b + "<" + a + "<" + c;
  }

  // in ouput ra mang hình
  document.getElementById("xuatKetQua").innerHTML = ketQua;
}; //
// bài tập 2
document.getElementById("btnLoiChao").onclick = function () {
  //input: chonthanhvien,bo,me,anhtrai,emgai : string
  var chonThanhVien = Number(document.getElementById("chonThanhVien").value);
  //output : kết quả string
  var ketQua = "";

  switch (chonThanhVien) {
    case 1:
      {
        ketQua = "Xin chào người lạ!";
      }
      break;
    case 2:
      {
        ketQua = "Xin chào Bố!";
      }
      break;
    case 3:
      {
        ketQua = "Xin chào Mẹ!";
      }
      break;
    case 4:
      {
        ketQua = "Xin chào Anh Trai!";
      }
      break;
    default: {
      ketQua = "Xin chào Em Gái!";
    }
  }
  //in ra kết quả
  document.getElementById("xuatKetQua_2").innerHTML = ketQua;
};
// BÀI TẬP 3
document.getElementById("btnDem").onclick = function () {
  var soThu1 = Number(document.getElementById("soT1").value);
  var soThu2 = Number(document.getElementById("soT2").value);

  var soThu3 = Number(document.getElementById("soT3").value);
  //output : kết quả string
  var ketQua = "";
  // progress
  var soChan = 0;

  if (soThu1 % 2 === 0) {
    soChan++;
  }
  if (soThu2 % 2 === 0) {
    soChan++;
  }
  if (soThu3 % 2 === 0) {
    soChan++;
  }
  //in output ra màng hình
  document.getElementById("xuatKetQua_3").innerHTML =
    "Có " + soChan + " số chẵn và " + (3 - soChan) + " số lẻ";
};

// Bài tập 4
document.getElementById("btnDuDoan").onclick = function () {
  //input: canhdai1,canhdau2,canhdai3;number
  var canhDai1 = Number(document.getElementById("canh1").value);
  var canhDai2 = Number(document.getElementById("canh2").value);
  var canhDai3 = Number(document.getElementById("canh3").value);
  //output: string
  var duDoan = "";
  if (canhDai1 === canhDai2 && canhDai1 === canhDai3) {
    duDoan = "Tam giác đều";
  } else if (
    canhDai1 === canhDai2 ||
    canhDai1 === canhDai3 ||
    canhDai2 === canhDai3
  ) {
    duDoan = "Tam giác cân";
  } else if (
    canhDai1 * canhDai1 === canhDai2 * canhDai2 + canhDai3 * canhDai3 ||
    canhDai2 * canhDai2 === canhDai1 * canhDai1 + canhDai3 * canhDai3 ||
    canhDai3 * canhDai3 === canhDai1 * canhDai1 + canhDai2 * canhDai2
  ) {
    duDoan = "Tam giác vuông";
  } else {
    duDoan = "Tam giác khác";
  }
  // in kết quả ra màng hình

  document.getElementById("xuatKetQua_4").innerHTML = duDoan;
};
