const con = require('../config/dbConfig');
const loanModel = require('../models/loan');
console.log('in controller loan.js')

module.exports = {
    show: async (req, res, next) => {
        //for live body will be req.body
        let body = {
            "vehicle": "used",
            "vehicle_type": "private",
            "loan_type": "purchase",
            "mfg_year": 2017,
            "brand": "Maruti Suzuki",
            "model": "Baleno",
            "variant": "Delta 1.3",
            "location": "Chennai",
            "ownership": "1st",
            "condition": "Good",
            "vehicle_price": 300000,

            "customer_age": 35,
            "customer_profile": "Business",
            "customer_monthly_income": "35001 - 50000",
            "loan_amount": "240000 - 270000",
            "max_down_payment": "60000 - 30000",
            "existing_emi": "5000 - 10000",
            "max_emi_afford": "10000 - 15000",
            "house_type": "rented",
            "income_proof": "yes",
            "guarantor": "no",
            "place_of_study": "Bangalore",
        }

        let roi = 16.70,
            tenure = 36;

        //as down payment b/w 60000 - 30000
        let downPayment = 50000;
        let p = body.vehicle_price - downPayment; //250000
        var intr = roi / 1200;

        let emi = Math.round(p * intr / (1 - (Math.pow(1 / (1 + intr), tenure))));

        let finalData = {
            title: body.mfg_year + '- ' + body.brand + '- ' + body.model + '- ' + body.variant + '- ' + body.location,
            vehicle_price: "₹ " + numberWithCommas(body.vehicle_price),
            loan: {
                value: "₹ " + numberWithCommas(p),
                emi: "₹ " + numberWithCommas(emi),
                down_payment: "₹ " + numberWithCommas(downPayment),
                tenure: tenure + " months",
                roi: roi + "%"
            },
            kuwy_rating: {
                loan: "Good",
                vehicle: "Excellent",
                customer: "Good",
                customer_vehicle_match: "Excellent"
            }
        }

        res.status(200).send({ message: 'Info!', data: finalData, err: null });
    },
}

function numberWithCommas(x) {
    return x.toString().split('.')[0].length > 3 ? x.toString().substring(0, x.toString().split('.')[0].length - 3).replace(/\B(?=(\d{2})+(?!\d))/g, ",") + "," + x.toString().substring(x.toString().split('.')[0].length - 3) : x.toString();
}