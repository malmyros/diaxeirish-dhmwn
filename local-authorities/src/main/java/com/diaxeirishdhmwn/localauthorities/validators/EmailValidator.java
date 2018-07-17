package com.diaxeirishdhmwn.localauthorities.validators;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class EmailValidator implements ConstraintValidator<ValidEmail, String>
{
    private static final String EMAIL_PATTERN = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@" + "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";

    private Pattern pattern;
    private Matcher matcher;

    @Override
    public void initialize(ValidEmail constraintAnnotation)
    {
    }

    @Override
    public boolean isValid(String value, ConstraintValidatorContext context)
    {
        return (validateEmail(value));
    }

    private boolean validateEmail(String email)
    {
        pattern = Pattern.compile(EMAIL_PATTERN);
        matcher = pattern.matcher(email);
        return matcher.matches();
    }
}
