let helmet=require('helmet')
app.use(helmet.hidePoweredBy());
app.use(helmet.frameguard({action:'DENY'}))
app.use(helmet.xssFilter())
app.use(helmet.noSniff())
app.use(helmet.ieNoOpen())
app.use(helmet.noCache())
app.use(helmet.dnsPrefetchControl())
ninetyDaysInSeconds = 90*24*60*60; 

app.use(helmet.hsts({maxAge:ninetyDaysInSeconds,force:true}))

app.use(helmet.contentSecurityPolicy({
  directives:{
    defaultSrc:["'self'"],
    scriptSrc:["'self'", "trusted-cdn.com"]
  }
}))

