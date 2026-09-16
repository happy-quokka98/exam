// TechFlow Solutions - Interactive Application Script
// !!! II ეტაპი - კოდის გამართვა (Debugging) !!!
// ამ ფაილში დაშვებულია შეცდომები, რომლებიც ღილაკზე დაჭერისას იწვევს Console Error-ს და NaN / undefined შედეგს ეკრანზე.

document.addEventListener("DOMContentLoaded", function () {
    console.log("TechFlow App Loaded Successfully.");

    const calcButton = document.getElementById("calc-btn");

    if (calcButton) {
        calcButton.addEventListener("click", function () {
            console.log("კალკულატორის ღილაკზე დაჭერა დაფიქსირდა...");

            // =========================================================================
            // II ეტაპი - შეცდომა 1 (Runtime Error / Null Reference):
            // HTML-ში ელემენტის ID არის "plan-select", მაგრამ აქ წერია "price-plan-select".
            // შედეგად `planSelectElement` არის `null`, ხოლო `.value`-ზე წვდომა აჩენს Console Error-ს!
            // Uncaught TypeError: Cannot read properties of null (reading 'value')
            // =========================================================================
            const planSelectElement = document.getElementById("price-plan-select"); 
            const planPrice = parseFloat(planSelectElement.value);

            // =========================================================================
            // II ეტაპი - შეცდომა 2 (Undefined Property / Logic Error):
            // HTMLInputElement-ს არ გააჩნია თვისება `.val` (სწორია `.value`).
            // შედეგად `userCount` იღებს `undefined` მნიშვნელობას.
            // =========================================================================
            const userCountInput = document.getElementById("user-count");
            const userCount = userCountInput.val; // <--- ერორი: .val .value-ს ნაცვლად!

            const monthCountInput = document.getElementById("month-count");
            const monthCount = parseInt(monthCountInput.value);

            // =========================================================================
            // II ეტაპი - შეცდომა 3 (Arithmetic Error -> NaN Output):
            // რიცხვის გამრავლება `undefined`-ზე (planPrice * undefined * monthCount)
            // აბრუნებს `NaN`-ს (Not-a-Number).
            // =========================================================================
            const totalCost = planPrice * userCount * monthCount;

            // შედეგის ასახვა ეკრანზე ($NaN ან undefined)
            const resultDisplay = document.getElementById("total-price-display");
            resultDisplay.innerText = "$" + totalCost;
        });
    }
});
