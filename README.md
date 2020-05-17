firstApp-REACT NATIVE
PRINSIP ATOMIC DESIGN --> 
1. ATOMS
    komponen terkecil aplikasi ex. tombol button, back button, refresh button
    cenderung statless(function comp)
2. MOLECULS
    gabungan beberapa atom ex. atom search, atom box search -> molekul search
    cenderung statless(function comp)
3. ORGANISM
    gabungan molekul yang sudah mempunyai fungsi khusus
    statefull(class comp)
4. TEMPLATES
    suatu bentukan yang pasti mirip ex.template postingan
5. PAGES
    gabungan templates yang sudah memiliki data real

STRUKTUR FOLDER ATOMIC DESIGN
# --src
# |---assets //asset aplikasi
# |---components //untuk functional component
#  |---atoms
#  |---molekul
# |---config
#  |---router //routing tiap halaman
#  |---redux
#  |---services //folder calling API
# |---utils //function yang bsa dilakukan berulang ulang ex.func convert date
# |---container  //untuk class component
#  |---organism //ketika component bersifat generik bsa digunakan dimana saja
#  |---templates //ketika suatu halaman memiliki template yg sama 
# |---pages //spesifik untuk pages tertentu ex.login page
