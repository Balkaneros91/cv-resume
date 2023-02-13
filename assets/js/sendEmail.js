function sendMail(contactForm) {
    emailjs.send("gmail", "antonio", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "project_request": contactForm.projectsummary.value
        })
        .then(
            function (response) {
                console.log("SUCCESS", response);
            },
            function (error) {
                console.log("FAILED", error);
            }
        );
    return false; // To block from loading a new page
}



// Added while was doing the learning modules 

/* <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js">
</script>
<script type="text/javascript">
    (function () {
        emailjs.init("CUTjA1ptYGkoIJ1On");

        // var templateParams = {
        //     name: 'James',
        //     notes: 'Check this out!'
        // };

        // // emailjs.send('gmail', 'antonio', {name: "Antonio-Claudio", notes: "The project that I want is..."});
            // .then(function (response) {
            //     console.log('SUCCESS!', response.status, response.text);
            // }, function (error) {
            //     console.log('FAILED...', error);
            // });

    })();
</script> */