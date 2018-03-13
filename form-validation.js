/**
 * Created by michael on 31/05/2017.
 */

// Wait for the DOM to be ready
$(function() {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("#registration").validate({
        // Specify validation rules
        rules: {
            // The key name on the left side is the name attribute
            // of an input field. Validation rules are defined
            // on the right side

            nameTruck: {
                required: true,
            },

            adresEmail: {
                required: true,
                // Specify that email should be validated
                // by the built-in "email" rule
                email: true
            },

            surnames: {
                required: true,
                lettersonly: true
            },

            pickup_place: {
                required: true
            },

            topic1: {
                required: "Proszę wybrać tak lub nie"
            },

            phone: {
                required: true,
                digits: true,
                phonesPL: true
            },

            fb: {
                required: true,
                fb: true
            },

            website: {
                required: true,
                website: true
            },

            firm: {
                required: true,
                firm: true
            },

            file: {
                required: true,
                accept:"pdf,jpg"
            },

            checkzgoda: "required"

        },
        // Specify validation error messages
        messages: {
            nameTruck: {
                required: "Prosze cos",
                email: "sadas"
            },
            adresEmail: "Proszę wpisać poprawny adres email",
            surnames: "Proszę wpisać imię i nazwisko",
            fb: "Proszę wpisać poprawny adres Funpage",
            website: "Proszę wpisać poprawy adres",
            firm: "Proszę wpisać poprawny format",
            file: "Wybierz plik",
            checkzgoda: "Proszę zaznaczyć",
            phone: "Proszę wpisać poprawny numer",
            pickup_place: "Proszę wybrać",
        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function(form) {
            form.submit();
        }
    });
});
