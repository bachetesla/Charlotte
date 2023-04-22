# pull official base image
FROM python:latest

# set work directory
WORKDIR /code

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# copy project
COPY . .

RUN apt-get update
RUN apt-get install -y gcc python3-dev musl-dev netcat

RUN pip install --upgrade pip && pip install  -r requirements.txt

ENTRYPOINT ["./entrypoint.sh"]
