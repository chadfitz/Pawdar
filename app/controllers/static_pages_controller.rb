class StaticPagesController < ActionController::Base
  # doesn't need to be called frontend
  def frontend
    render file: Rails.root.join('public', 'index.html')
  end
end