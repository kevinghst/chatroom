class User < ActiveRecord::Base
  attr_reader :password

  validates :username, :session_token, presence: true, uniqueness: true

  validates(
    :password,
    length: { minimum: 6, allow_nil: true }
  )

  before_validation :ensure_session_token

  def verify_password(password)
    self.is_password?(password) ? self : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
