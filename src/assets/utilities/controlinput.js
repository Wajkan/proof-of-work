// KONTROLLERA FORM DATA ÄR I FYLLT

export const emptyFieldsAlert = (formData) => {

    const formValues = Object.values(formData); // HÄMTAR INPUT DATA
  
    const checkFieldInput = formValues.some((value) => {     // SOME CHECKAR OM NÅGON HAR ETT VÄRDE
  
    const trimmedValue = value.trim(); // TRINMMA BORT MELLASLAG
  
    return trimmedValue === ''; // KOLLA OM DET FINNS TOMMA FÄLT
  
    });
  
    return checkFieldInput;    // RETURNERAR SANT OM DET FINNS TOMMA FÄLT SAMT FALSK ALLA FÄLT HAR INNEHÅLL 
  
  };