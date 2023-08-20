let express = require('express');
let path = require('path');
let app = express();
let mongoose = require('mongoose');
require('./src/db/conn');
const sampleData = require("./src/models/users");
const fs = require('fs');
const { PDFDocument } = require('pdf-lib');
// const mod = require("./public/quote");

let staticPath = path.join(__dirname,'public');

// Express Specific Code
app.use(express.static(staticPath)); // For serving static files
app.use(express.urlencoded());


// EJS Specific Code
app.set('view engine','ejs');
// app.set('views',path.join(__dirname,'views')); 

// let d = new Date();
// console.log(__dirname);
app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/quote',(req,res)=>{
    res.render('quote.ejs',{data:null});
})

let DATA,dob,family_Size,NAME,PLANNAME,SUMASSURED,Age;
app.post('/quote',async (req,res)=>{
    try {
        dob = req.body.date;
        var year = Number(dob.substr(0, 4));
        var month = Number(dob.substr(5, 2)) - 1;
        var day = Number(dob.substr(8, 2));

        let today = new Date();
        Age = today.getFullYear() - year;
        if(today.getMonth() < month || (today.getMonth() == month && today.getDate()<day)){
            Age--;
        }
        // console.log(Age)
        family_Size = req.body.family_Size;
        PLANNAME = req.body.Ins_product;
        NAME = req.body.name;
        SUMASSURED = req.body.sumassured;
        // let planName = "Arogya"
        DATA = await sampleData.find({"planType": family_Size,'ageStart':{$lte: Age},'ageEnd':{$gte: Age}});
        // planNameforFile = await sampleData.findOne({"planName": PLANNAME}); // this was made to get a particular tupple
        // console.log(DATA);
        // console.log(planNameforFile);
        res.status(200).render('quote.ejs',{data: DATA});
    } catch (error) {
        res.status(404).send(error);
    }
})

app.get('/download',async (req,res)=>{
    try {
        // console.log(SUMASSURED);
        const pdfBytes = fs.readFileSync('newForm1.pdf');
        const pdfDoc = await PDFDocument.load(pdfBytes);
        const form = pdfDoc.getForm();
    
        // Getting Fields
        const nameField = form.getTextField('name');
        const familySize = form.getTextField('familySize');
        const plannameField = form.getTextField('planname');
        const sumassured = form.getTextField('sumassured');
        const premium = form.getTextField('premium');
        const premiumPlanName0 = form.getTextField('premiumPlanName0');
        const premiumPlan0Name5 = form.getTextField('premiumPlan0Name5lac');
        const premiumPlan0Name10 = form.getTextField('premiumPlan0Name10lac');
        const premiumPlan0Name15 = form.getTextField('premiumPlan0Name15lac');
        const premiumPlan0Name25 = form.getTextField('premiumPlan0Name25lac');
        const premiumPlan0Name50 = form.getTextField('premiumPlan0Name50lac');
        const premiumPlan0Name100 = form.getTextField('premiumPlan0Name100lac');
        const premiumPlanName1 = form.getTextField('premiumPlanName1');
        const premiumPlan1Name5 = form.getTextField('premiumPlan1Name5lac');
        const premiumPlan1Name10 = form.getTextField('premiumPlan1Name10lac');
        const premiumPlan1Name15 = form.getTextField('premiumPlan1Name15lac');
        const premiumPlan1Name25 = form.getTextField('premiumPlan1Name25lac');
        const premiumPlan1Name50 = form.getTextField('premiumPlan1Name50lac');
        const premiumPlan1Name100 = form.getTextField('premiumPlan1Name100lac');
        const premiumPlanName2 = form.getTextField('premiumPlanName2');
        const premiumPlan2Name5 = form.getTextField('premiumPlan2Name5lac');
        const premiumPlan2Name10 = form.getTextField('premiumPlan2Name10lac');
        const premiumPlan2Name15 = form.getTextField('premiumPlan2Name15lac');
        const premiumPlan2Name25 = form.getTextField('premiumPlan2Name25lac');
        const premiumPlan2Name50 = form.getTextField('premiumPlan2Name50lac');
        const premiumPlan2Name100 = form.getTextField('premiumPlan2Name100lac');
        
        // For Selecting Particular Plan...
        let planBuffer = await sampleData.findOne({"planName": PLANNAME, "planType": family_Size,'ageStart':{$lte: Age},'ageEnd':{$gte: Age}});
        if (SUMASSURED == '5 Lakh') {
            premium.setText(planBuffer.lacFIVE);
        }
        else if(SUMASSURED == '10 Lakh'){
            premium.setText(planBuffer.lacTEN);
        }
        else if (SUMASSURED == '15 Lakh') {
            premium.setText(planBuffer.lacFIFTEEN);
        }
        else if (SUMASSURED == '25 Lakh') {
            premium.setText(planBuffer.lacTWENTYFIVE);
        }
        else if (SUMASSURED == '50 Lakh') {
            premium.setText(planBuffer.lacFIFTY);
        }
        else {
            premium.setText(planBuffer.lacHUNDRED);
        }

        nameField.setText(NAME);
        plannameField.setText(PLANNAME);
        sumassured.setText(SUMASSURED);
        familySize.setText(DATA[0].planType);
        

        // COMPARISON VALUES SET
        premiumPlanName0.setText(DATA[0].planName);
        premiumPlan0Name5.setText(DATA[0].lacFIVE);
        premiumPlan0Name10.setText(DATA[0].lacTEN);
        premiumPlan0Name15.setText(DATA[0].lacFIFTEEN);
        premiumPlan0Name25.setText(DATA[0].lacTWENTYFIVE);
        premiumPlan0Name50.setText(DATA[0].lacFIFTY);
        premiumPlan0Name100.setText(DATA[0].lacHUNDRED);
        premiumPlanName1.setText(DATA[1].planName);
        premiumPlan1Name5.setText(DATA[1].lacFIVE);
        premiumPlan1Name10.setText(DATA[1].lacTEN);
        premiumPlan1Name15.setText(DATA[1].lacFIFTEEN);
        premiumPlan1Name25.setText(DATA[1].lacTWENTYFIVE);
        premiumPlan1Name50.setText(DATA[1].lacFIFTY);
        premiumPlan1Name100.setText(DATA[1].lacHUNDRED);
        premiumPlanName2.setText(DATA[2].planName);
        premiumPlan2Name5.setText(DATA[2].lacFIVE);
        premiumPlan2Name10.setText(DATA[2].lacTEN);
        premiumPlan2Name15.setText(DATA[2].lacFIFTEEN);
        premiumPlan2Name25.setText(DATA[2].lacTWENTYFIVE);
        premiumPlan2Name50.setText(DATA[2].lacFIFTY);
        premiumPlan2Name100.setText(DATA[2].lacHUNDRED);

        // paragraphs
        const roomRent = form.getTextField('roomRent');
        const maternity = form.getTextField('maternity');
        const checkUp = form.getTextField('healthCheckup');
        const NoclaimBonus = form.getTextField('NoClaimBonus');
        const coverRestoration = form.getTextField('coverRestoration');
        const cashBenifit = form.getTextField('cashAllowance');
        const coPay = form.getTextField('coPay');
        const dayCare = form.getTextField('dayCare');

        let planDetails = await sampleData.findOne({"planType": "info", "planName":PLANNAME});
        // console.log(planDetails);

        roomRent.setText(planDetails.roomRent);
        maternity.setText(planDetails.maternity);
        checkUp.setText(planDetails.checkUp);
        NoclaimBonus.setText(planDetails.noClaimBonus);
        coverRestoration.setText(planDetails.coveRestoration);
        cashBenifit.setText(planDetails.cashBenefit);
        coPay.setText(planDetails.copay);
        dayCare.setText(planDetails.moreInfo);

        form.flatten();

        const modifiedPdfBytes = await pdfDoc.save();
        fs.writeFileSync('template.pdf', modifiedPdfBytes);
        var file =fs.readFileSync('template.pdf');
        
        res.contentType("application/pdf");
        res.send(file);
        // res.status(200).render('quote.ejs',{data: null});

    } catch (error) {
        res.status(404).send(error);
    }
})


app.listen(200,()=>{
    console.log('Port Working...');
})