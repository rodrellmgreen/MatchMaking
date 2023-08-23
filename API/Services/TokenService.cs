﻿using API.Entities;
using API.Interfaces;

using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace API.Services
{
    public class TokenService : ITokenService

    {
        private readonly SymmetricSecurityKey _symmetricSecurityKey;
        public TokenService(IConfiguration config)
        {
            _symmetricSecurityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["TokenKey"]));
        }
        public string CreateToken(AppUser user)
        {
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.NameId, user.UserName)
            };

            var creds = new SigningCredentials(_symmetricSecurityKey, SecurityAlgorithms.HmacSha512);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(7),
                SigningCredentials = creds
            };

            var tokenHanldler = new JwtSecurityTokenHandler();

            var token = tokenHanldler.CreateToken(tokenDescriptor);

            return tokenHanldler.WriteToken(token);
        }
    }

}
