import React, { useEffect } from 'react';

const SurveyAlert = () => {
    useEffect(() => {
        const shouldShowSurvey = window.confirm("Müşteri anketimize katılmak ister misiniz?");

        if (shouldShowSurvey) {
            const userResponse = window.confirm("Evet'i seçtiniz. Anketi doldurmak için 'OK' tuşuna basın.");

            if (userResponse) {
                // Kullanıcı evet'i seçti, anketi doldurmak için yönlendirme yapabilirsiniz.
                window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLScLeyd3cFOOCkfZDgG-GMOO_pSEh22Q4qW9TIUdp38xly0H5g/viewform";
            } else {
                // Kullanıcı eveti reddetti.
                alert("Anketi doldurmak için bir sonraki fırsatınızda bize katılabilirsiniz.");
            }
        } else {
            // Kullanıcı hayır'ı seçti veya alert'i kapattı.
            alert("Müşteri anketimize katılmadığınız için teşekkür ederiz.");
        }
    }, []); // Sadece bir kere çalıştırmak için boş bağımlılık listesi kullanıyoruz.

    return (
        <div>
            {/* Anket için özel içerik ekleyebilirsiniz, ancak bu içerik sayfanın açılmasını beklemeden görünmeyecek. */}
          
        </div>
    );
};

export default SurveyAlert;
