var express = require("express");
var app = express();
// var { conn, sql } = require("./connect/connect");
const sql = require("mssql/msnodesqlv8");
const bodyParser = require("body-parser");
const path = require("path");
// const eventRoutes = require("./routes/eventRoutes");

const multer = require("multer");
var appRoot = require("app-root-path");

app.use("/assets", express.static(path.join(__dirname, "../assets")));

app.use(express.json());
app.use(bodyParser.json());

var config = {
  server: "LAPTOP-HPDFB2R3\\SQLEXPRESS",
  database: "QLSP",
  driver: "msnodesqlv8",
  options: {
    trustedConnection: true,
  },
};

// app.get("/", function (req, res) {
//   res.sendFile(path.join(__dirname, "./index.html"));
// });

app.get("/upload", function (req, res) {
  res.sendFile(path.join(__dirname, "./upload.html"));
});

// app.get("/student/:id", async function (req, res) {
//   let id = req.params.id;
//   sql.connect(config, function (err) {
//     if (err) console.log(err);
//     var request = new sql.Request();
//     var query = `
//       select * from SINHVIEN
//       where MaSV = @varId`;
//     request.input("varId", sql.Int, id).query(query, function (err, records) {
//       if (err) console.log(err);
//       res.send(records.recordset);
//     });
//   });
// });

// app.post("/student", async function (req, res) {
//   sql.connect(config, function (err) {
//     if (err) console.log(err);
//     var request = new sql.Request();
//     var query = `
//       insert into SINHVIEN(TenSV, age)
//       values(@TenSV, @age)
//     `;
//     request
//       .input("TenSV", sql.NVarChar, req.body.TenSV)
//       .input("age", sql.Int, req.body.age)
//       .query(query, function (err, records) {
//         if (err) console.log(err);
//         res.send(records.recordset);
//       });
//   });
// });

// app.put("/student", async function (req, res) {
//   sql.connect(config, function (err) {
//     if (err) console.log(err);
//     var request = new sql.Request();
//     var query = `
//       update SINHVIEN
//       set TenSV = @TenSV, age = @age
//       where MaSV = @MaSV
//     `;
//     request
//       .input("TenSV", sql.NVarChar, req.body.TenSV)
//       .input("MaSV", sql.Int, req.body.MaSV)
//       .input("age", sql.Int, req.body.age)
//       .query(query, function (err, records) {
//         if (err) console.log(err);
//         res.send(records.recordset);
//       });
//   });
// });

// app.delete("/student/:id", async function (req, res) {
//   let id = req.params.id;
//   sql.connect(config, function (err) {
//     if (err) console.log(err);
//     var request = new sql.Request();
//     var query = `
//     DELETE
//     FROM SINHVIEN
//     wHERE MaSV= @MaSV;
//     `;
//     request.input("MaSV", sql.Int, id).query(query, function (err, records) {
//       if (err) console.log(err);
//       res.send(records);
//     });
//   });
// });

// app.delete("/student/:name", async function (req, res) {
//   let name = req.params.name;
//   sql.connect(config, function (err) {
//     if (err) console.log(err);
//     var request = new sql.Request();
//     var query = `
//     DELETE
//     FROM SINHVIEN
//     wHERE MaSV = @TenSV;
//     `;
//     request
//       .input("TenSV", sql.NVarChar, name)
//       .query(query, function (err, records) {
//         if (err) console.log(err);
//         res.send(records);
//       });
//   });
// });

// =================  ================================
const upload = multer().single("profile_pic");

let handleUploadFile = async (req, res) => {
  // 'profile_pic' is the name of our file input field in the HTML form

  upload(req, res, function (err) {
    // req.file contains information of uploaded file
    // req.body contains information of text fields, if there were any

    if (req.fileValidationError) {
      return res.send(req.fileValidationError);
    } else if (!req.file) {
      return res.send("Please select an image to upload");
    } else if (err instanceof multer.MulterError) {
      return res.send(err);
    } else if (err) {
      return res.send(err);
    }

    // Display uploaded image for user validation
    res.send(
      `You have uploaded this image: <hr/><img src="/image/${req.file.filename}" width="500"><hr /><a href="/upload">Upload another image</a>`
    );
  });
};
// ======================= UPLOAD FILE =======================
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, appRoot + "/image/");
  },

  // By default, multer removes file extensions so let's add them back
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const imageFilter = function (req, file, cb) {
  // Accept images only
  if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|jfif|GIF)$/)) {
    req.fileValidationError = "Only image files are allowed!";
    return cb(new Error("Only image files are allowed!"), false);
  }
  cb(null, true);
};

let upload1 = multer({ storage: storage, fileFilter: imageFilter });

app.post(
  "/upload-profile-pic",
  upload1.single("profile_pic"),
  handleUploadFile
);

// ==================== get data cart =====================
app.get("/upload/cart", async function (req, res) {
  sql.connect(config, function (err) {
    if (err) console.log(err);
    var request = new sql.Request();
    var query = `
      select * from SANPHAM
      `;
    request.query(query, function (err, records) {
      if (err) console.log(err);
      console.log(records);
      res.send(records.recordset);
    });
  });
});
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../index.html"));
});
app.get("/index", function (req, res) {
  res.sendFile(path.join(__dirname, "../index.html"));
});
app.get("/dashboard", function (req, res) {
  res.sendFile(path.join(__dirname, "../dashboard.html"));
});
app.get("/sanpham", function (req, res) {
  res.sendFile(path.join(__dirname, "../sanpham.html"));
});

app.get("/gio-hang", function (req, res) {
  res.sendFile(path.join(__dirname, "../gio-hang.html"));
});
app.get("/blog", function (req, res) {
  res.sendFile(path.join(__dirname, "../blog.html"));
});
app.get("/thongtinsanpham", function (req, res) {
  res.sendFile(path.join(__dirname, "../thongtinsanpham.html"));
});
app.get("/lienhe", function (req, res) {
  res.sendFile(path.join(__dirname, "../lienhe.html"));
});
app.get("/SP", async function (req, res) {
  sql.connect(config, function (err) {
    if (err) console.log(err);
    var request = new sql.Request();
    var query = `
      select * from SANPHAM
      `;
    request.query(query, function (err, records) {
      if (err) console.log(err);
      res.send(records.recordset);
    });
  });
});

app.delete("/SP/:id", async function (req, res) {
  let id = req.params.id;
  sql.connect(config, function (err) {
    if (err) console.log(err);
    var request = new sql.Request();
    var query = `
    DELETE
    FROM SANPHAM
    wHERE id = @id;
    `;
    request.input("id", sql.VarChar, id).query(query, function (err, records) {
      if (err) console.log(err);
      res.send(records);
    });
  });
});
// open
app.listen(5050, function () {
  console.log("Ung dung dang chay");
});
