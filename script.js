// Show the selected page

        function showPage(pageName) {

            var pages = document.querySelectorAll(".page");

            for (var i = 0; i < pages.length; i++) {
                pages[i].classList.remove("active");
            }

            document.getElementById(pageName).classList.add("active");

            closeMenu();

            window.scrollTo(0, 0);
        }


        // Open and close the mobile menu

        function toggleMenu() {

            var menu = document.getElementById("mobileMenu");

            if (menu.style.display == "block") {
                menu.style.display = "none";
            } else {
                menu.style.display = "block";
            }

        }


        // Close the mobile menu

        function closeMenu() {

            document.getElementById("mobileMenu").style.display = "none";

        }
