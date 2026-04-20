@echo off
echo Starting AdMetrics Dashboard Server...
:: Start the python server silently in the background
start /B python -m http.server 8000 >nul 2>&1
:: Wait 1 second for the server to spin up
timeout /t 1 /nobreak >nul
:: Open the dashboard in the default web browser (Chrome, Edge, etc.)
start http://localhost:8000/marketing_dashboard.html
exit
