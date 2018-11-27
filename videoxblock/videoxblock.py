

import pkg_resources

from xblock.core import XBlock
from xblock.fields import Scope, String
from xblock.fragment import Fragment
from xblockutils.studio_editable import StudioEditableXBlockMixin


class VideoXBlock(StudioEditableXBlockMixin, XBlock):


    # Fields are defined on the class.  You can access them in your code as
    # self.<fieldname>.
    display_name = String(display_name="Display name", default='Print', scope=Scope.settings)

    def resource_string(self, path):
        """Handy helper for getting resources from our kit."""
        data = pkg_resources.resource_string(__name__, path)
        return data.decode("utf8")

    def student_view(self, context=None):
        """
        The primary view of the VideoXBlock, shown to students
        when viewing courses.
        """
        html = self.resource_string("static/html/videoxblock1.html")
        frag = Fragment(html.format(self=self))
        frag.add_css(self.resource_string("static/css/videoxblock.css"))
        # frag.add_javascript(self.resource_string("static/js/src/videoxblock1.js"))

        return frag

    # Make fields editable in studio
    editable_fields = ('display_name', )
