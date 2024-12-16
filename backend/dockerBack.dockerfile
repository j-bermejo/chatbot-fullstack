# Version python
FROM python:3.10

# Directorio de trabajo
WORKDIR /app

# Copiar los archivos del proyecto
COPY requirements.txt .

# Instalar las dependencias
RUN pip install -r requirements.txt

# Copiar archivos
COPY . .

# Puerto
EXPOSE 8000

# Comando predeterminado
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
