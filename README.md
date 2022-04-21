The application has two windows: __MORTGAGE CALCULATOR__ and __EDIT BANK__.

___

___Important___: three banks are available by default. If all banks are removed, an empty array remains in the ___locale storage___. To restore the default banks, you must completely clear the ___locale storage___ (including the empty array) and reload the program.

___Note___:
_The application was tested in_ ___Google Chrome v100.0.4896.75(x86_64)___

---

__MORTGAGE CALCULATOR__ (window appears immediately after loading)

__Fields__

1. ___choose bank___ 
(bank selection or name entry)

2. ___initial loan___ 
(fields for entering the desired loan amount)

3. ___down payment___ 
(field for entering the first payment)

4. ___monthly mortgage___ 
(field for displaying the amount of the monthly payment; not active for input)

___Note___:
if in fields ___2___ and ___3___ a value is entered that is greater than the value allowed by the selected bank, then a message about choosing a more suitable bank appears. After ___2.2___ seconds, the error window disappears and all fields are cleared.
All fields are required

__Buttons__
1. ___calculate___ 
(after clicking, the amount of the monthly payment is displayed in the output field)

2. ___reset___ 
(clears all input fields)

3. ___edit bank___ 
(opens the page of the bank editor selected in the bank selection field)

---

__EDIT BANK__

___Fields___

1. ___bank___ 
(bank name)

2. ___interest rate___ 
(annual interest rate)

3. ___max loan___
 (maximum loan amount)

4. ___min payment___ 
(minimum down payment)

5. ___term___ 
(loan term in months)

___Buttons___
1. ___update___ 
(saves the new settings for the current bank; if the bank name is changed, saves the new bank)

2. ___delete___ 
(deletes the current bank)

3. ___calculator___ 
(opens the calculator window)

___Note___: all fields are required
