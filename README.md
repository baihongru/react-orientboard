# ngOrientboard(ReactBoard)

## Credits

 OrientSoft R&D Team

 Copyright 2013 - 2016@orientsoft.cn



## Dependencies

> If you're developing under Windows, see docs to setup your environment with
> vagrant or docker. Direct Windows development is not supported.

**Node >= v4.0** and a global `gulp` is required.

**It's recommended to use the latest version of npm**, to update npm run:

```
npm i -g -U npm
```

To install gulp:

```
npm i -g gulp
```

If you encounter permission problems, try these command with sudo.

Also, if you want simpler watching process, install `tmux` on your machine.

## Install

```
git clone --recursive https://github.com/Orientsoft/react-orientboard
cd react-orientboard
npm i
```
### Database Init

For development environment prepare, you need install redisServer(see http://redis.io/) and mongodb (see https://docs.mongodb.com/manual/) first.
* Attention: the database must **not** have any password

And prepare the orientboard initital database schema in mongodb
```
mongorestore
```
## Development

For development environment: see [Setup with Docker](doc/dev/docker.md) or [Setup with Vagrant](doc/dev/vagrant.md)

## Usage

```
npm start
```

Open localhost:3000

## Documentation

Start the server and go to `localhost:3000/doc` for docs generated by gitbook, or see [Doc index](doc/SUMMARY.md)
