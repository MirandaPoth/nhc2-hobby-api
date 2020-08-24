import {NHC2} from '../src/NHC2';

const nhc2 = new NHC2('mqtts://192.168.0.51', {
    port: 8884,
    clientId: 'clientId',
    username: 'hobby',
    "password": "eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJob2JieSIsImlhdCI6MTU5NjcwMjg2MiwiZXhwIjoxNjI4MjM4ODYyLCJyb2xlIjpbImhvYmJ5Il0sImF1ZCI6IkZQMDAxMTJBMjI1NTAzIiwiaXNzIjoibmhjLWNvcmUiLCJqdGkiOiI5MGU3NDk0Mi0zNzFhLTQwODEtYmM3ZS02NjNjZGI3MWVkODcifQ.IAv_aklm3t46gFA1wT6o3LDCKwemSSaImdMoyuaeIqxYcpWZYSC7hTutfU0zmaB7fOvDksd8yS7BZ1OX7mp4ZpWrag8fe357TT-Iw_kPdOaWHIAsg1oHDHXpLy2cHXYW4dMk4K8JnrVILNbKR83tdhtqAkgY0ikOHbsG21a58Thf1mhRa3mSm33O6tDIeqLEpkp_TJipJs0I9RnIOIj_Hg0P8nzHqaWUh8QlxM5KdEPB5FmC64owvRFKjn5zIZD2e47bR6Jv-IP7hegT83c3NY9ZijtNHyXGD4cshDE4SH3PGtxNBtLMRNaVsLy7-XSSXkTTC_yOY1Z0nSvJrk4ZYw",
    rejectUnauthorized: false,
});

(async () => {
    await nhc2.subscribe();

    const accessories = await nhc2.getAccessories();
    accessories.filter(accessory => accessory.Model === 'light')
        .forEach(light => {
            console.log('Turning on light ' + light.Name);
            nhc2.sendStatusChangeCommand(light.Uuid, true)
        });
})();

