param([string]$Source)
$ErrorActionPreference = 'Stop'
[Console]::OutputEncoding = [Text.UTF8Encoding]::new($false)
(ConvertFrom-Markdown -LiteralPath $Source).Html
