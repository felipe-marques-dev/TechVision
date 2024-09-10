import bcrypt
from django.core.exceptions import ValidationError

def hash_password(password):
    """Hash a password and return the hash as bytes."""
    # Certifique-se de que a senha é um bytes
    password_bytes = password.encode('utf-8')  # Converte a string para bytes
    salt = bcrypt.gensalt()
    hashed_password = bcrypt.hashpw(password_bytes, salt)
    final_password = hashed_password.decode('utf-8')
    return final_password  # Retorne o hash como bytes

def verify_password(password_attempt, stored_hash):

        """Verify if the provided password matches the stored hash."""
        password_attempt_bytes = password_attempt.encode('utf-8')  # Converte a string para bytes
        return bcrypt.checkpw(password_attempt_bytes, stored_hash)
