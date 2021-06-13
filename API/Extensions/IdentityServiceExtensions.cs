using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;

namespace API.Extensions
{
    public static class IdentityServiceExtensions
    {
        public static IServiceCollection AddIdentityService(this IServiceCollection services,IConfiguration config){
             var secretKey = config["TokenKey"];
            var key = new SymmetricSecurityKey(Encoding.UTF8
                .GetBytes(secretKey));
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            .AddJwtBearer(opt => {
                  opt.TokenValidationParameters = new TokenValidationParameters
                  {
                      ValidateIssuerSigningKey = true,
                      ValidateIssuer = false,
                      ValidateAudience = false,
                      IssuerSigningKey = key
                  };
              });

              return services;
        }
    }
}