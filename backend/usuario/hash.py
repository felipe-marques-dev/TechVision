import bcrypt

def hash_password(password):
    """Hash a password and return the hash."""
    # Certifique-se de que a senha é um bytes
    password_bytes = password.encode('utf-8')  # Converte a string para bytes
    salt = bcrypt.gensalt()
    hashed_password = bcrypt.hashpw(password_bytes, salt)
    password_final = hashed_password.decode('utf-8')
    return password_final

def verify_password(stored_hash, password_attempt):
    """Verify if the provided password matches the stored hash."""
    password_attempt_bytes = password_attempt.encode('utf-8')  # Converte a string para bytes
    return bcrypt.checkpw(password_attempt_bytes, stored_hash)

