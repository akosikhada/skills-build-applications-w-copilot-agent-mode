from django.core.management.base import BaseCommand
from octofit_tracker.models import User, Team, Activity, Leaderboard, Workout
from bson import ObjectId
from datetime import timedelta

class Command(BaseCommand):
    help = 'Populate the database with test data for users, teams, activity, leaderboard, and workouts'

    def handle(self, *args, **kwargs):
        # Clear existing data
        User.objects.all().delete()
        Team.objects.all().delete()
        Activity.objects.all().delete()
        Leaderboard.objects.all().delete()
        Workout.objects.all().delete()

        # Create users
        user1 = User.objects.create(username='superman', email='superman@hero.com', password='krypton')
        user2 = User.objects.create(username='batman', email='batman@hero.com', password='wayne')
        user3 = User.objects.create(username='wonderwoman', email='wonderwoman@hero.com', password='amazon')

        # Create teams
        team1 = Team.objects.create(name='Justice League')
        team1.members.add(user1, user2, user3)
        team1.save()

        # Create activities
        activity1 = Activity.objects.create(user=user1, activity_type='run', duration=timedelta(hours=1))
        activity2 = Activity.objects.create(user=user2, activity_type='swim', duration=timedelta(minutes=45))
        activity3 = Activity.objects.create(user=user3, activity_type='cycle', duration=timedelta(minutes=30))

        # Create leaderboard
        Leaderboard.objects.create(user=user1, score=100)
        Leaderboard.objects.create(user=user2, score=80)
        Leaderboard.objects.create(user=user3, score=90)

        # Create workouts
        Workout.objects.create(name='Pushups', description='Do 20 pushups')
        Workout.objects.create(name='Situps', description='Do 30 situps')
        Workout.objects.create(name='Squats', description='Do 40 squats')

        self.stdout.write(self.style.SUCCESS('Test data populated successfully.'))
