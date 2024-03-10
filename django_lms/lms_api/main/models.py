from django.db import models

#Teacher Model
class Teacher(models.Model):
    full_name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    qualification = models.CharField(max_length=150)
    mobile_nr = models.CharField(max_length=100)
    skills = models.TextField()
    class Meta:
        verbose_name_plural="1. Teachers"

#Course Category Model
class CourseCategory(models.Model):
    title = models.CharField(max_length=150)
    description = models.TextField()
    #for modifications
    class Meta:
        verbose_name_plural="2. Course Categories" 
    def __str__(self):
        return self.title

#Course Model
class Course(models.Model):
    category = models.ForeignKey(CourseCategory, on_delete=models.CASCADE)
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE) 
    title = models.CharField(max_length=150)
    description = models.TextField()
    featured_img = models.ImageField(upload_to='course_imgs/',null=True)
    techs = models.TextField(null=True)

    class Meta:
        verbose_name_plural="3. Courses"


#Chapter Model
class Chapter(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE) 
    title = models.CharField(max_length=150)
    description = models.TextField()
    video = models.FileField(upload_to='chapter_videos/',null=True)
    remarks = models.TextField(null=True)

    class Meta:
        verbose_name_plural="4. Chapters"


#Student Model
class Student(models.Model):
    full_name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    qualification = models.CharField(max_length=150)
    mobile_nr = models.CharField(max_length=100)
    address = models.TextField()
    #it will be recommended courses depending on this field
    interested_categories=models.TextField()
    class Meta:
        verbose_name_plural="5. Students"

