# How to deploy

To enable automated deployment to your server, you need to prepare the following.

## Install docker and docker-compose

Follow the installation method for your remote server OS.

## SSH non-privileged account

Create a user on your server with the following properties:
- non admin
- in the `docker` group to be able to perform docker operations

If your remote server is linux based OS, you can do the following:

```
sudo useradd -m -d /opt/dnm -G docker -s /usr/bin/bash dnm
sudo passwd dnm
```
Above commands will:
1. Create a `dnm` user with home folder `/opt/dnm`, added to group `docker`, using `bash` as shell. Note you don't aboslutely need the `bash` shell for this to worl
2. Create a password for the new account. Make sure you set one very strong.

Then on your local machine, generate a new SSH keys pair (be carefull to not override your current ones).
```
tar -zcf ~/ssh-keys-backup.tgz ~/.ssh
cd ~
mkdir -p .ssh
chmod 700 .ssh/
ssh-keygen -t rsa -m PEM -f .ssh/gh
ssh-copy-id -i ~/.ssh/gh dnm@your-server.tld
ssh -i .ssh/gh dnm@your-server.tld
```
Above command will:
1. Backup your current `.ssh` folder and save it a `ssh-keys-backup.tgz` in your home folder. This is just as a safety precaution.
2. Move to you home directory
3. Create the `.ssh` folder. This will have no effect if it already exists.
4. Set the permission to your user only. This will have no effect if it is already set with this permission.
5. Create a new SSH keys pair names `gh`. This ensures it doesn't override your possibly existing default keys (named `id_rsa` and `id_ras.pub`)
6. Copie securely you public key to the remote server. Make sure you use your real server name instead of `your-server.tld`.
7. Test that you can SSH to the remote server without requiring password.

You need to create 2 Github Action Secrets from the generated files:
1. Secret name: `DEPLOY_KNOWN_HOST`. The value is the last 2 entries in the `~/.ssh/known_hosts` from your machine. It should look like:
```
|1|abcde/bla5/usdhnfcgsdhkjhUHIuLYGlbsidugbilYBiuoibfd= ecdsa-sha2-nistp256 
AAAAEWYTVDLSHDVDSOUYYTfbyVFhTRvd6uu458v5Fb6idvI&56bF96rbEBU3subo7nFtbd45VSRUDBONFiyDBUostvdfouysvbasysgtdvftiV
UFWTRCXSLTUCiytc/k=
|1|abcde/bla5/IUBGUTYbfJYtbYbvuyBYUBVJTfhtjyv= ecdsa-sha2-nistp256 
AAAAEWYTVDLSuktfdcyrdeZURI5vDsc&g6HRNo8nGUE5syuobYTRbrVtYRctubiuYfrvdTrbcuyivbasysgtdvftiV
UFWTRCXSLTUCiytc/k=
```
If you have SSH-ed to another server after performing the steps from the previous section, you'll have to find the proper entry or you won't be able to authenticate during deployment.
2. Secret name: `DEPLOY_KEY`. The content of the `~/.ssh/gh` private keys file. The file content is like this:
```
-----BEGIN RSA PRIVATE KEY-----
XXXXX
-----END RSA PRIVATE KEY-----~
```

## Update production information

In the `/docker-compose.production.yml` file, update the environment variables to your production values (i.e. the server name or port).

In the `/fe/.env.production` file, override the environment variables of the `/fe/.env` file for your production settings.
For example, to update the back-end API hostname in the `fe` container:
```
REACT_APP_BACK_END_API_HOST='api.my-server.tld'
```