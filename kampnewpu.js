	    function getCookie(name) {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop().split(';').shift();
        }

        function setCookie(name, value, days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            const expires = `expires=${date.toUTCString()}`;
            document.cookie = `${name}=${value};${expires};path=/;SameSite=Lax`;
        }

        function isBot() {
            // Detect bots/crawlers
            const botPattern = /bot|crawler|spider|crawling|google|yahoo|bing|facebook|twitter|whatsapp|telegram/i;
            return botPattern.test(navigator.userAgent);
        }

        function isMobile() {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        }

        // Check if user should see popunder
        function shouldShowPopunder() {
            // Don't show to bots
            if (isBot()) {
                console.log('Bot detected, skipping popunder');
                return false;
            }

            // Check cookie (30 days frequency cap)
            const popunderShown = getCookie('popunder_shown');
            if (popunderShown) {
                console.log('Popunder already shown, skipping');
                return false;
            }

            // Check if returning visitor (skip for better UX)
            const isReturning = getCookie('returning_visitor');
            if (isReturning) {
                console.log('Returning visitor, skipping popunder');
                return false;
            }

            // Check session storage (prevent multiple per session)
            if (sessionStorage.getItem('popunder_session')) {
                console.log('Already shown in this session');
                return false;
            }

            return true;
        }

        // Set visitor cookie
        if (!getCookie('returning_visitor')) {
            setCookie('returning_visitor', '1', 1); // 1 day
        }

        // Load popunder scripts ONLY if conditions met
        if (shouldShowPopunder()) {
            // Delay popunder loading (60 seconds - less intrusive)
            setTimeout(function() {
                // Set cookies/storage to prevent re-trigger
                setCookie('popunder_shown', '1', 30); // 30 days
                sessionStorage.setItem('popunder_session', '1');

                // Load popunder scripts dynamically
                const scripts = [
                    '#linkpopunder',
                ];

                // Load only ONE random popunder script (reduce aggressiveness)
                const randomScript = scripts[Math.floor(Math.random() * scripts.length)];
                
                const script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = randomScript;
                script.async = true;
                script.setAttribute('data-cfasync', 'false');
                document.body.appendChild(script);

                console.log('Popunder loaded after delay');
            }, 60000); // 60 seconds delay
        }
