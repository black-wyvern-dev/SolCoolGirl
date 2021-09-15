# Generate certipication files with mkcert

## Install mkcert with choco

choco install mkcert

## Generate cert and key for certain url

mkcert -key-file key.pem -cert-file cert.pem ::1 localhost

## confirm locate these files in the cert dir

