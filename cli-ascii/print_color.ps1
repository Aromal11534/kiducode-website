[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$lines = Get-Content .\hi.txt -Encoding UTF8
$esc = [char]27

# Using ANSI TrueColor for mid-range Orange (RGB: 255, 117, 0)
$orange = "$esc[38;2;255;117;0m" 
# Using ANSI Bright White
$white = "$esc[97m"
$reset = "$esc[0m"

foreach ($line in $lines) {
    # Color the solid blocks White
    $line = $line -replace '(█+)', "$white`$1$reset"
    # Color the borders/shadows Orange
    $line = $line -replace '([╗║╝═╔╚]+)', "$orange`$1$reset"
    Write-Output $line
}
