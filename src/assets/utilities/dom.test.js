import { displayAccountOverview } from "./dom.js";

describe('Will the correct strings appear?', () => {
    it('should display the input values', () => {
      // Arrange... SKAPAR ETT OBJEKT MED SAMMA SERVER STRUKTUR OCH SKICKAR IN VÄRDEN
      const account = [{
        email: 'wiklund.karl@gmail.com',   
        psw: '****',
        id: 'id74'
      }];
   
      // Act... KÖR FUNKTIONEN
      const values = displayAccountOverview(account);
   
      // Assert...  KONTROLLERAR ATT DET FINNS DESSA EXAKTA STRÄNGAR EFTER MAN KÖR FUNKTIONEN
      expect(values).toContain('Email: wiklund.karl@gmail.com');
      expect(values).toContain('Password: ****');
      expect(values).toContain('Id: id74');
    });
   });