# load-env.ps1

Get-Content .env | ForEach-Object {
    if ($_ -match '^\s*#') { return }   # skip comments
    if ($_ -match '^\s*$') { return }   # skip empty lines
    $name, $value = $_ -split '=', 2
    [System.Environment]::SetEnvironmentVariable($name.Trim(), $value.Trim(), "Process")
    Write-Output "Set $name"
}
