import RecommendationsImplication from "./implications.js";
import Rewards from "./exportReady.js";
import totalAveragePercentages from "./totalimplications.js";
import Percentage from "./category.js";
// const fs = require("fs");
import fs from "fs";

// Read the image file and encode it as a Base64 string
const image = fs.readFileSync("./public/explogo.jpeg", { encoding: "base64" });

// Create an img element with the Base64-encoded image as the src attribute
const imgElement = `<img src="data:image/jpeg;base64,${image}" alt="My Image"  style ="height:100px; width:100px">`;

const timp1 = Percentage[4].implication;
const timp2 = Percentage[3].implication;
const timp3 = Percentage[2].implication;
const timp4 = Percentage[1].implication;
const timp5 = Percentage[0].implication;

const sug1 = Percentage[4].nomenclature;
const sug2 = Percentage[3].nomenclature;
const sug3 = Percentage[2].nomenclature;
const sug4 = Percentage[1].nomenclature;
const sug5 = Percentage[0].nomenclature;

const Implications1 = Rewards[0].implications;
const im1 = Implications1[0];
const im2 = Implications1[1];
const im3 = Implications1[2];
const im4 = Implications1[3];
const im5 = Implications1[4];

const Implications2 = Rewards[1].implications;
const im21 = Implications2[0];
const im22 = Implications2[1];
const im23 = Implications2[2];
const im24 = Implications2[3];
const im25 = Implications2[4];

const Implications3 = Rewards[2].implications;
const im31 = Implications3[0];
const im32 = Implications3[1];
const im33 = Implications3[2];
const im34 = Implications3[3];
const im35 = Implications3[4];

const Implications4 = Rewards[3].implications;
const im41 = Implications4[0];
const im42 = Implications4[1];
const im43 = Implications4[2];
const im44 = Implications4[3];
const im45 = Implications4[4];

const Implications5 = Rewards[4].implications;
const im51 = Implications5[0];
const im52 = Implications5[1];
const im53 = Implications5[2];
const im54 = Implications5[3];
const im55 = Implications5[4];

const Implications6 = Rewards[5].implications;
const im61 = Implications6[0];
const im62 = Implications6[1];
const im63 = Implications6[2];
const im64 = Implications6[3];
const im65 = Implications6[4];

const Implications7 = Rewards[6].implications;
const im71 = Implications7[0];
const im72 = Implications7[1];
const im73 = Implications7[2];
const im74 = Implications7[3];
const im75 = Implications7[4];

const Implications8 = Rewards[7].implications;
const im81 = Implications8[0];
const im82 = Implications8[1];
const im83 = Implications8[2];
const im84 = Implications8[3];
const im85 = Implications8[4];

const Implications9 = Rewards[8].implications;
const im91 = Implications9[0];
const im92 = Implications9[1];
const im93 = Implications9[2];
const im94 = Implications9[3];
const im95 = Implications9[4];

const Implications10 = Rewards[9].implications;
const im101 = Implications10[0];
const im102 = Implications10[1];
const im103 = Implications10[2];
const im104 = Implications10[3];
const im105 = Implications10[4];

const Implications11 = Rewards[10].implications;
const im111 = Implications11[0];
const im112 = Implications11[1];
const im113 = Implications11[2];
const im114 = Implications11[3];
const im115 = Implications11[4];

const Implications12 = Rewards[11].implications;
const im121 = Implications12[0];
const im122 = Implications12[1];
const im123 = Implications12[2];
const im124 = Implications12[3];
const im125 = Implications12[4];

const Implications13 = Rewards[12].implications;
const im131 = Implications13[0];
const im132 = Implications13[1];
const im133 = Implications13[2];
const im134 = Implications13[3];
const im135 = Implications13[4];

const Implications14 = Rewards[13].implications;
const im141 = Implications14[0];
const im142 = Implications14[1];
const im143 = Implications14[2];
const im144 = Implications14[3];
const im145 = Implications14[4];

const Implications15 = Rewards[14].implications;
const im151 = Implications15[0];
const im152 = Implications15[1];
const im153 = Implications15[2];
const im154 = Implications15[3];
const im155 = Implications15[4];

const recommendations1 = Rewards[0].recommendations;
const rm1 = recommendations1[0];
const rm2 = recommendations1[1];
const rm3 = recommendations1[2];
const rm4 = recommendations1[3];
const rm5 = recommendations1[4];

const recommendations2 = Rewards[1].recommendations;
const rm21 = recommendations2[0];
const rm22 = recommendations2[1];
const rm23 = recommendations2[2];
const rm24 = recommendations2[3];
const rm25 = recommendations2[4];

const recommendations3 = Rewards[2].recommendations;
const rm31 = recommendations3[0];
const rm32 = recommendations3[1];
const rm33 = recommendations3[2];
const rm34 = recommendations3[3];
const rm35 = recommendations3[4];

const recommendations4 = Rewards[3].recommendations;
const rm41 = recommendations4[0];
const rm42 = recommendations4[1];
const rm43 = recommendations4[2];
const rm44 = recommendations4[3];
const rm45 = recommendations4[4];

const recommendations5 = Rewards[4].recommendations;
const rm51 = recommendations5[0];
const rm52 = recommendations5[1];
const rm53 = recommendations5[2];
const rm54 = recommendations5[3];
const rm55 = recommendations5[4];

const recommendations6 = Rewards[5].recommendations;
const rm61 = recommendations6[0];
const rm62 = recommendations6[1];
const rm63 = recommendations6[2];
const rm64 = recommendations6[3];
const rm65 = recommendations6[4];

const recommendations7 = Rewards[6].recommendations;
const rm71 = recommendations7[0];
const rm72 = recommendations7[1];
const rm73 = recommendations7[2];
const rm74 = recommendations7[3];
const rm75 = recommendations7[4];

const recommendations8 = Rewards[7].recommendations;
const rm81 = recommendations8[0];
const rm82 = recommendations8[1];
const rm83 = recommendations8[2];
const rm84 = recommendations8[3];
const rm85 = recommendations8[4];

const recommendations9 = Rewards[8].recommendations;
const rm91 = recommendations9[0];
const rm92 = recommendations9[1];
const rm93 = recommendations9[2];
const rm94 = recommendations9[3];
const rm95 = recommendations9[4];

const recommendations10 = Rewards[9].recommendations;
const rm101 = recommendations10[0];
const rm102 = recommendations10[1];
const rm103 = recommendations10[2];
const rm104 = recommendations10[3];
const rm105 = recommendations10[4];

const recommendations11 = Rewards[10].recommendations;
const rm111 = recommendations11[0];
const rm112 = recommendations11[1];
const rm113 = recommendations11[2];
const rm114 = recommendations11[3];
const rm115 = recommendations11[4];

const recommendations12 = Rewards[11].recommendations;
const rm121 = recommendations12[0];
const rm122 = recommendations12[1];
const rm123 = recommendations12[2];
const rm124 = recommendations12[3];
const rm125 = recommendations12[4];

const recommendations13 = Rewards[12].recommendations;
const rm131 = recommendations13[0];
const rm132 = recommendations13[1];
const rm133 = recommendations13[2];
const rm134 = recommendations13[3];
const rm135 = recommendations13[4];

const recommendations14 = Rewards[13].recommendations;
const rm141 = recommendations14[0];
const rm142 = recommendations14[1];
const rm143 = recommendations14[2];
const rm144 = recommendations14[3];
const rm145 = recommendations14[4];

const recommendations15 = Rewards[14].recommendations;
const rm151 = recommendations15[0];
const rm152 = recommendations15[1];
const rm153 = recommendations15[2];
const rm154 = recommendations15[3];
const rm155 = recommendations15[4];

const pdfTemplate = ({
  cat1,
  cat2,
  cat3,
  cat4,
  cat5,
  cat6,
  cat7,
  cat8,
  cat9,
  cat10,
  cat11,
  cat12,
  cat13,
  cat14,
  cat15,
  user,
  totalAveragePercentage,
}) => {
  const totalimp = totalAveragePercentages(
    totalAveragePercentage,
    timp1,
    timp2,
    timp3,
    timp4,
    timp5
  );

  const totalsug = totalAveragePercentages(
    totalAveragePercentage,
    sug1,
    sug2,
    sug3,
    sug4,
    sug5
  );
  const Grade = totalAveragePercentages(
    totalAveragePercentage,
    "E",
    "D",
    "C",
    "B",
    "A"
  );

  const totalImp1 = RecommendationsImplication(cat1, im1, im2, im3, im4, im5);
  const totalImp2 = RecommendationsImplication(
    cat2,
    im21,
    im22,
    im23,
    im24,
    im25
  );
  const totalImp3 = RecommendationsImplication(
    cat3,
    im31,
    im32,
    im33,
    im34,
    im35
  );
  const totalImp4 = RecommendationsImplication(
    cat4,
    im41,
    im32,
    im43,
    im44,
    im45
  );
  const totalImp5 = RecommendationsImplication(
    cat5,
    im51,
    im52,
    im53,
    im54,
    im55
  );
  const totalImp6 = RecommendationsImplication(
    cat6,
    im61,
    im62,
    im63,
    im64,
    im65
  );
  const totalImp7 = RecommendationsImplication(
    cat7,
    im71,
    im72,
    im73,
    im74,
    im75
  );
  const totalImp8 = RecommendationsImplication(
    cat8,
    im81,
    im82,
    im83,
    im84,
    im85
  );
  const totalImp9 = RecommendationsImplication(
    cat9,
    im91,
    im92,
    im93,
    im94,
    im95
  );
  const totalImp10 = RecommendationsImplication(
    cat10,
    im101,
    im102,
    im103,
    im104,
    im105
  );
  const totalImp11 = RecommendationsImplication(
    cat11,
    im111,
    im112,
    im113,
    im114,
    im115
  );
  const totalImp12 = RecommendationsImplication(
    cat12,
    im121,
    im122,
    im123,
    im124,
    im125
  );
  const totalImp13 = RecommendationsImplication(
    cat13,
    im131,
    im132,
    im133,
    im134,
    im135
  );
  const totalImp14 = RecommendationsImplication(
    cat14,
    im141,
    im142,
    im143,
    im144,
    im145
  );
  const totalImp15 = RecommendationsImplication(
    cat15,
    im151,
    im152,
    im153,
    im154,
    im155
  );

  const totalrmp1 = RecommendationsImplication(cat1, rm1, rm2, rm3, rm4, rm5);
  const totalrmp2 = RecommendationsImplication(
    cat2,
    rm21,
    rm22,
    rm23,
    rm24,
    rm25
  );
  const totalrmp3 = RecommendationsImplication(
    cat3,
    rm31,
    rm32,
    rm33,
    rm34,
    rm35
  );
  const totalrmp4 = RecommendationsImplication(
    cat4,
    rm41,
    rm32,
    rm43,
    rm44,
    rm45
  );
  const totalrmp5 = RecommendationsImplication(
    cat5,
    rm51,
    rm52,
    rm53,
    rm54,
    rm55
  );
  const totalrmp6 = RecommendationsImplication(
    cat6,
    rm61,
    rm62,
    rm63,
    rm64,
    rm65
  );
  const totalrmp7 = RecommendationsImplication(
    cat7,
    rm71,
    rm72,
    rm73,
    rm74,
    rm75
  );
  const totalrmp8 = RecommendationsImplication(
    cat8,
    rm81,
    rm82,
    rm83,
    rm84,
    rm85
  );
  const totalrmp9 = RecommendationsImplication(
    cat9,
    rm91,
    rm92,
    rm93,
    rm94,
    rm95
  );
  const totalrmp10 = RecommendationsImplication(
    cat10,
    rm101,
    rm102,
    rm103,
    rm104,
    rm105
  );
  const totalrmp11 = RecommendationsImplication(
    cat11,
    rm111,
    rm112,
    rm113,
    rm114,
    rm115
  );
  const totalrmp12 = RecommendationsImplication(
    cat12,
    rm121,
    rm122,
    rm123,
    rm124,
    rm125
  );
  const totalrmp13 = RecommendationsImplication(
    cat13,
    rm131,
    rm132,
    rm133,
    rm134,
    rm135
  );
  const totalrmp14 = RecommendationsImplication(
    cat14,
    rm141,
    rm142,
    rm143,
    rm144,
    rm145
  );
  const totalrmp15 = RecommendationsImplication(
    cat2,
    rm151,
    rm152,
    rm153,
    rm154,
    rm155
  );

  const today = new Date();
  return `
    <!doctype html>
    <html>
       <head>

          <meta charset="utf-8">
          <title>PDF Result Template</title>
          <style>
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td, #customers th {
  border: 5px solid white;
  padding: 8px;
  margin-right : 20px;
  margin-bottom : 20px;
  line-height : 30px;
}


#customers tr:nth-child(even){background-color: #00FFFF; }

#customers tr:hover {
  background-color: #ddd;

}

tr, table, th, td {
  border: 1px solid black
  padding : 20px;
  margin-bottom : 20px;
}
td{
  margin-bottom : 20px;
}
#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
  margin : 20px;
}

body{
 
  margin : 30px;
}
table {
  margin-top:20px;
}

.image{

  position : absolute;
  top : 80px;
  left : 80px;
  height : 50px;
  background-color: aqua;
}
.heading{
  position : absolute;
  top : 0;
  left : 20%;
height : 50px;
background-color: aqua;
}
.details{
line-height : 0px;
position : absolute;
top : 80px;
right : 100px;
background-color: aqua;
}

table{
  box-shadow : 3px 3px  3px solid black
}
</style>

       </head>
       <body>
          <div class="container">
          <div class="image">
          ${imgElement}
        </div>
        <div class="heading">
        <h2> Export Readiness Assessment For ${user.companyName}</h2>
        </div>
        <div class="details">
          <h4>Name : ${user.firstName} ${user.lastName}</h4>
          <h4>Phone : ${user.phone}</h4>
          <h4>e-mail: ${user.email}</h4>
          <h4>Company name : ${user.companyName}</h4>
          <h4>Products : ${user.Products}</h4>
        </div>
          </div>  
          <table>
          
          <thead id="customers">
            <tr >
              <th>Category</th>
              <th>Score</th>
              <th>Explanations</th>
              <th>Implication</th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <td>Positioning</td>
         <td>${cat1}</td>
         
         <td>${totalImp1}</td>
         <td>${totalrmp1}</td>
        
       </tr>

<tr>
       <td>Promoters</td>
         <td>${cat2}</td>
         <td>${totalImp2}</td>
         <td>${totalrmp2}</td>
         
       </tr><br>
<tr>
       <td>Products</td>
         <td>${cat3}</td>
         <td>${totalImp3}</td>
         <td>${totalrmp3}</td>
        
         </tr><br>
<tr>
       <td>Pricing</td>
         <td>${cat4}</td>
         <td>${totalImp4}</td>
         <td>${totalrmp4}</td>
        
         </tr><br>
<tr>
       <td>Predisposition</td>
         <td>${cat5}</td>
         <td>${totalImp5}</td>
         <td>${totalrmp5}</td>
       
         </tr><br>
<tr>
       <td>Purpose</td>
         <td>${cat6}</td>
         <td>${totalImp6}</td>
         <td>${totalrmp6}</td>
       
         </tr><br>
<tr>
       <td>Payment</td>
         <td>${cat7}</td>
         <td>${totalImp7}</td>
         <td>${totalrmp7}</td>
         </tr><br>
<tr>
       <td>Production</td>
         <td>${cat8}</td>
         <td>${totalImp8}</td>
         <td>${totalrmp8}</td>
        
         </tr><br>
<tr>
       <td>Proficiency</td>
         <td>${cat9}</td>
         <td>${totalImp9}</td>
         <td>${totalrmp9}</td>
     
         </tr><br>

<tr>
       <td>People</td>
         <td>${cat10}</td>
         <td>${totalImp10}</td>
         <td>${totalrmp10}</td>
        
         </tr><br>
<tr>
       <td>Paperwork</td>
         <td>${cat11}</td>
         <td>${totalImp11}</td>
         <td>${totalrmp11}</td>
      
         </tr><br>

<tr>
       <td>Potential</td>
         <td>${cat12}</td>
         <td>${totalImp12}</td>
         <td>${totalrmp12}</td>
         </tr><br>

<tr>
       <td>Promotion</td>
         <td>${cat13}</td>
         <td>${totalImp13}</td>
         <td>${totalrmp13}</td>
         </tr><br>
<tr>
       <td>Purchasers</td>
         <td>${cat14}</td>
       
         <td>${totalImp14}</td>
         <td>${totalrmp14}</td>
       </tr><br>

<tr>
       <td>Partnership</td>
         <td>${cat15}</td>
         <td>${totalImp15}</td>
         <td>${totalrmp15}</td>
       </tr><br>

       <tr>
       <td>Total</td>
         <td style="font-weight:bold;">${totalAveragePercentage.toFixed(
           2
         )} %</td>
         
         <td style="font-weight:bold;" >${totalimp}</td>
         <td style="font-weight:bold;">${totalsug}</td>
       </tr><br>
    
      <tr>
       <td>Grade</td>
       <td style="font-weight:bold;" >${Grade} </td>
     </tr>
       
          </tbody>
        </table>
            
       </body>
    </html>
    `;
};

export default pdfTemplate;
