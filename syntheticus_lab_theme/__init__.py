from ._version import __version__


def _jupyter_labextension_paths():
    return [{
        "src": "labextension",
        "dest": "syntheticus_lab_theme"
    }]
