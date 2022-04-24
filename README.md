### MORTGAGE CALCULATOR

#### Web app where users can create/edit banks and calculate mortgage payments
___

The application has two windows __MORTGAGE CALCULATOR__ and __EDIT BANK__.

Three banks are available by default. If all banks are removed, an empty array remains in the ___locale storage___. To restore the default banks, you must completely clear the ___locale storage___ (including the empty array) and reload the program.

When you select a bank on a __MORTGAGE CALCULATOR__ all of that bank's settings are displayed on the __EDIT BANK__  and are available for editing.



___Note___:
application was tested in _Google Chrome v100.0.4896.75(x86_64)_

---

__MORTGAGE CALCULATOR__ (window appears immediately after loading)

__Fields__ (_all fields are required_)

1. ___choose bank___ 
- bank selection or name entry

2. ___initial loan___ 
- fields for entering the desired loan amount
(_active for input_)

3. ___down payment___ 
- field for entering the first payment
(_active for input_)

4. ___monthly mortgage___ 
- field for displaying the amount of the monthly payment
(_not active for input_)

___Note___:
if in fields ___2___ and ___3___ a value is entered that is greater than the value allowed by the selected bank, then a message about choosing a more suitable bank appears. After ___2.2___ seconds, the error window disappears and all fields are cleared.

__Buttons:__
1. ___calculate___ 
- after clicking, the amount of the monthly payment is displayed in the  ___monthly mortgage___ field

2. ___reset___ 
- clears all input fields

3. ___edit bank___ 
- opens __EDIT BANK__ page

---

__EDIT BANK__

___Fields___ (_all fields are required and active for input_) 

1. ___bank___ 
- _bank name_

2. ___interest rate___ 
- _annual interest rate_

3. ___max loan___
 - _maximum loan amount_

4. ___min payment___ 
- _minimum down payment_

5. ___term___ 
- _loan term in months_

___Buttons:___
1. ___update___ 
- saves the new settings for the current bank
- if the bank name is changed, saves the new bank

2. ___delete___ 
- deletes the current bank
- if the bank name field is empty, the ___delete___ button simply clears the fields without changing the settings

3. ___calculator___ 
- opens the __MORTGAGE CALCULATOR__
