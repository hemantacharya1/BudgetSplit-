package com.misogi.budgetsplit.dto;

import com.misogi.budgetsplit.model.User;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AuthenticationResponse  {
    private String token;
    private UserDto userDto;
    
    public static AuthenticationResponse mapToResponse(User user, String token) {
    	return AuthenticationResponse.builder()
    			.token(token)
    			.userDto(UserDto.fromUser(user))
    			.build();
    }   
}
