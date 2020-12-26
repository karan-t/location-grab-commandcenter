export const EMAIL_REGEX = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

export const NAME_REGEX = RegExp(/^[A-Za-z]+$/);

export const PH_NUM_REGEX = RegExp(/\b(\d){8,13}\b/);

export const AGE_REGEX = RegExp(/^(100|[1-9][0-9]?)$/);
